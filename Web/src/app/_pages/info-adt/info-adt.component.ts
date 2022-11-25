import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { InfoAdtService } from 'src/app/_services/infoAdt/infoAdt.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-info-adt',
  templateUrl: './info-adt.component.html',
  styleUrls: ['./info-adt.component.scss']
})
export class InfoAdtComponent implements OnInit {

  public listBeneficiarios!: any[];
  filteredDocumento: Observable<any[]> | undefined;
  documentoNumeroCtrl: FormControl;

  public listMunicipios!: any[];
  municipioCtrl: FormControl;
  filteredMunicipios: Observable<any[]> | undefined;
  data : any[] = [];
  isSearch: boolean = false;


  constructor(
    private fb: FormBuilder,
    private infoAdtService: InfoAdtService,
  ) {
    this.municipioCtrl = new FormControl();
    this.documentoNumeroCtrl = new FormControl();

    this.filteredMunicipios = this.municipioCtrl.valueChanges
    .pipe(
      startWith(''),
      map(municipio => municipio ? this.filterMunicipio(municipio) : this.listMunicipios != undefined ? this.listMunicipios.slice() : this.listMunicipios)
    );

    this.filteredDocumento = this.documentoNumeroCtrl.valueChanges
    .pipe(
      startWith(''),
      map(documentoNumero => documentoNumero ? this.filterBeneficiario(documentoNumero) : this.listBeneficiarios != undefined ? this.listBeneficiarios.slice() : this.listBeneficiarios)
    );
  }

  ngOnInit(): void {

    this.infoAdtService.getBeneficiarios().subscribe(res => {
      this.listBeneficiarios = res;
    });

    this.infoAdtService.getMunicipios().subscribe(res => {
      this.listMunicipios = res;
    });

  }

  filterMunicipio(municipio: string) {
    return this.listMunicipios.filter(m =>
      m.municipio.toLowerCase().indexOf(municipio.toLowerCase()) === 0);
  }

  filterBeneficiario(documentoNumero: string) {
    return this.listBeneficiarios.filter(m =>
      m.documentoNumero.toLowerCase().indexOf(documentoNumero.toLowerCase()) === 0);
  }

  onSubmit(){
    let cc = this.documentoNumeroCtrl?.value;
    let mun = this.municipioCtrl?.value;
    if(cc != null || mun != null){
      this.isSearch = true;
      if(mun != null)
      mun = (mun.trim()).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      this.infoAdtService.getBeneficiariosByFilters(cc == null ? '' : cc, mun == null ? '' : mun).subscribe(res => {
        if(res != null){
          this.data = res;
        }
      });
    }

  }

  clear(){
    this.isSearch = false;
    this.municipioCtrl?.setValue(null);
    this.documentoNumeroCtrl?.setValue(null);
    this.data = [];
  }
}
