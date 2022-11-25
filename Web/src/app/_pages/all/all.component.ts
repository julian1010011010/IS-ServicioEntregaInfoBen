import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { InfoConService } from 'src/app/_services/infoCon/infoCon.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { InfoBenService } from 'src/app/_services/infoBen/infoBen.service';
import { InfoAddService } from 'src/app/_services/infoAdd/infoAdd.service';
import { InfoAdtService } from 'src/app/_services/infoAdt/infoAdt.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  public listBeneficiarios!: any[];
  filteredDocumento: Observable<any[]> | undefined;
  documentoNumeroCtrl: FormControl;

  public listMunicipios!: any[];
  municipioCtrl: FormControl;
  filteredMunicipios: Observable<any[]> | undefined;
  ELEMENT_DATA: any[] = [];

  displayedColumns: string[] = [
    'fuenteDato',
    'documentoTipo',
    'documentoNumero',
    'nombreCompleto',
    'departamento',
    'correoElectronico',
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  isSearch: boolean = false;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private fb: FormBuilder,
    private infoConService: InfoConService,
    private infoBenService: InfoBenService,
    private InfoAddService: InfoAddService,
    private InfoAdtService: InfoAdtService,

  ) {
  }

  ngOnInit(): void {

    this.infoConService.getBeneficiarios().subscribe(res => {
      if(res != null){
        res.forEach(element => {
          element.fuenteDato = 'Asistencia Técnica';
          this.dataSource.data.push(element);
        });
      }
    });
    this.infoBenService.getBeneficiarios().subscribe(res => {
      if(res != null){
        res.forEach(element => {
          element.fuenteDato = 'Asociatividad';
          this.dataSource.data.push(element);
        });
      }
    });
    this.InfoAdtService.getBeneficiarios().subscribe(res => {
      if(res != null){
        res.forEach(element => {
          element.fuenteDato = 'ADT';
          this.dataSource.data.push(element);
        });
      }
    });
    this.InfoAddService.getBeneficiarios().subscribe(res => {
      if(res != null){
        res.forEach(element => {
          element.fuenteDato = 'PIDAR';
          this.dataSource.data.push(element);
        });
      }
    });
    this.inicializarTabla();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  inicializarTabla() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
