import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { InfoConService } from 'src/app/_services/infoCon/infoCon.service';

@Component({
  selector: 'app-info-con',
  templateUrl: './info-con.component.html',
  styleUrls: ['./info-con.component.scss']
})
export class InfoConComponent implements OnInit {

  public listBeneficiarios!: any[];
  filteredDocumento: Observable<any[]> | undefined;
  documentoNumeroCtrl: FormControl;

  public listMunicipios!: any[];
  municipioCtrl: FormControl;
  filteredMunicipios: Observable<any[]> | undefined;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'documentoTipo',
    'documentoNumero',
    'nombreCompleto',
    'departamento',
    'correoElectronico',
  ];
  isSearch: boolean = false;


  constructor(
    private fb: FormBuilder,
    private infoConService: InfoConService,
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

    this.infoConService.getBeneficiarios().subscribe(res => {
      this.listBeneficiarios = res;
    });

    this.infoConService.getMunicipios().subscribe(res => {
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
      this.infoConService.getBeneficiariosByFilters(cc == null ? '' : cc, mun == null ? '' : mun).subscribe(res => {
        if(res != null){
          this.dataSource = new MatTableDataSource( res );
        }
      });
    }

  }

  clear(){
    this.isSearch = false;
    this.dataSource = new MatTableDataSource();
    this.municipioCtrl?.setValue(null);
    this.documentoNumeroCtrl?.setValue(null);
  }

}
