import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../shared/services/auth.service';
import { SessionService } from '../shared/services/session.service';
import { ToasterService } from '../shared/services/toaster.service';
import { UserService } from '../shared/services/user.service';
import { HttpService } from '../shared/services/http.service';
import { HighlightState } from '../shared/interfaces';
import { Title } from '@angular/platform-browser';
import { RoleService } from '../shared/services/role.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PagesComponent implements OnInit {
  highlightState: HighlightState;
  category: string;
  supportForm!: FormGroup;
  molesForm:FormGroup;
  settingsData: any;
  matchingElements: any;
   moles: any;
   totalAotoMicMass :any;
   moleculesGiven:any;
   numberOfMoles:any;
   elemtsTrueFalse:boolean = false;
   

apiURL ='localhost:8080/getMolecularToEmpiricalRecords';
data:any;

  perodicTable = [
    { name: 'H', AtomicMass: 1.0079 },
    { name: 'He', AtomicMass: 4.0026 },
    { name: 'Li', AtomicMass: 6.941 },
    { name: 'Be', AtomicMass: 9.0122 },
    { name: 'B', AtomicMass: 10.81 },
    { name: 'C', AtomicMass: 12.011 },
    { name: 'N', AtomicMass: 14.007 },
    { name: 'O', AtomicMass: 15.999 },
    { name: 'F', AtomicMass: 18.998 },
    { name: 'S', AtomicMass: 32.06 },

    { name: 'Ne', AtomicMass: 20.180 },
    { name: 'Na', AtomicMass: 22.990 },
    { name: 'Mg', AtomicMass: 24.305 },
    { name: 'Al', AtomicMass: 26.982 },
    { name: 'Si', AtomicMass: 28.085 },
    { name: 'P', AtomicMass: 30.974 },
    { name: 'Cl', AtomicMass: 35.45 },
    { name: 'Ar', AtomicMass: 39.948 },
    { name: 'K', AtomicMass: 39.098 },
    { name: 'Ca', AtomicMass: 40.078 },
    { name: 'Sc', AtomicMass: 44.956 },
    { name: 'Ti', AtomicMass: 47.867 },
    { name: 'V', AtomicMass: 50.942 },
    { name: 'Cr', AtomicMass: 51.996 },
    { name: 'Mn', AtomicMass: 54.938 },
    { name: 'Fe', AtomicMass: 55.845 },
    { name: 'Co', AtomicMass: 58.933 },
    { name: 'Ni', AtomicMass: 58.693 },
    { name: 'Cu', AtomicMass: 63.546 },
    { name: 'Zn', AtomicMass: 65.38 },
    { name: 'Ga', AtomicMass: 69.723 },
    { name: 'Ge', AtomicMass: 72.630 },
    { name: 'As', AtomicMass: 74.922 },
    { name: 'Se', AtomicMass: 78.971 },
    { name: 'Br', AtomicMass: 79.904 },
    { name: 'Kr', AtomicMass: 83.798 },
    { name: 'Rb', AtomicMass: 85.468 },
    { name: 'Sr', AtomicMass: 87.62 },
    { name: 'Y', AtomicMass: 88.906 },
    { name: 'Zr', AtomicMass: 91.224 },
    { name: 'Nb', AtomicMass: 92.906 },
    { name: 'Mo', AtomicMass: 95.95 },
    { name: 'Tc', AtomicMass: 98 },
    { name: 'Ru', AtomicMass: 101.07 },
    { name: 'Rh', AtomicMass: 102.91 },
    { name: 'Pd', AtomicMass: 106.42 },
    { name: 'Ag', AtomicMass: 107.87 },
    { name: 'Cd', AtomicMass: 112.41 },
    { name: 'In', AtomicMass: 114.82 },
    { name: 'Sn', AtomicMass: 118.71 },
    { name: 'Sb', AtomicMass: 121.76 },
    { name: 'Te', AtomicMass: 127.60 },
    { name: 'I', AtomicMass: 126.90 },
    { name: 'Xe', AtomicMass: 131.29 },
    { name: 'Cs', AtomicMass: 132.91 },
    { name: 'Ba', AtomicMass: 137.33 },
    { name: 'La', AtomicMass: 138.91 },
    { name: 'Ce', AtomicMass: 140.12 },
    { name: 'Pr', AtomicMass: 140.91 },
    { name: 'Nd', AtomicMass: 144.24 },
    { name: 'Pm', AtomicMass: 145 },
    { name: 'Sm', AtomicMass: 150.36 },
    { name: 'Eu', AtomicMass: 151.96 },
    { name: 'Gd', AtomicMass: 157.25 },
    { name: 'Tb', AtomicMass: 158.93 },
    { name: 'Dy', AtomicMass: 162.50 },
    { name: 'Ho', AtomicMass: 164.93 },
    { name: 'Er', AtomicMass: 167.26 },
    { name: 'Tm', AtomicMass: 168.93 },
    { name: 'Yb', AtomicMass: 173.05 },
    { name: 'Lu', AtomicMass: 174.97 },
    { name: 'Hf', AtomicMass: 178.49 },
    { name: 'Ta', AtomicMass: 180.95 },
    { name: 'W', AtomicMass: 183.84 },
    { name: 'Re', AtomicMass: 186.21 },
    { name: 'Os', AtomicMass: 186.21 },
    { name: 'Ir', AtomicMass: 192.22 },
    { name: 'Pt', AtomicMass: 195.08 },
    { name: 'Au', AtomicMass: 196.97 },
    { name: 'Hg', AtomicMass: 200.59 },
    { name: 'Tl', AtomicMass: 204.38 },
    { name: 'Pb', AtomicMass: 207.2 },
    { name: 'Bi', AtomicMass: 208.98 },
    { name: 'Po', AtomicMass: 209 },
    { name: 'At', AtomicMass: 210 },
    { name: 'Rn', AtomicMass: 222 },
    { name: 'Fr', AtomicMass: 223 },
    { name: 'Ra', AtomicMass: 226 },
    { name: 'Ac', AtomicMass: 227 },
    { name: 'Th', AtomicMass: 232.04 },
    { name: 'Pa', AtomicMass: 231.04 },
    { name: 'U', AtomicMass: 238.03 },
    { name: 'Np', AtomicMass: 237 },
    { name: 'Pu', AtomicMass: 244 },
    { name: 'Am', AtomicMass: 243 },
    { name: 'Cm', AtomicMass: 247 },
    { name: 'Bk', AtomicMass: 247 },
    { name: 'Cf', AtomicMass: 251 },
    { name: 'Es', AtomicMass: 252 },
    { name: 'Fm', AtomicMass: 257 },
    { name: 'Md', AtomicMass: 258 },
    { name: 'No', AtomicMass: 259 },
    { name: 'Lr', AtomicMass: 262 },
    { name: 'Rf', AtomicMass: 267 },
    { name: 'Db', AtomicMass: 270 },
    { name: 'Sg', AtomicMass: 271 },
    { name: 'Bh', AtomicMass: 270 },
    { name: 'Hs', AtomicMass: 277 },
    { name: 'Mt', AtomicMass: 276 },
    { name: 'Ds', AtomicMass: 281 },
    { name: 'Rg', AtomicMass: 280 },
    { name: 'Cn', AtomicMass: 285 },
    { name: 'Nh', AtomicMass: 284 },
    { name: 'Fl', AtomicMass: 289 },
    { name: 'Mc', AtomicMass: 288 },
    { name: 'Lv', AtomicMass: 293 },
    { name: 'Ts', AtomicMass: 294 },
    { name: 'Og', AtomicMass: 294 },
  ]
  electronicConfiguration = [
    { name: 'Hydrogen (H)', elect: '1s¹' },
    { name: 'Helium (He)', elect: '1s²' },
    { name: 'Lithium (Li)', elect: '1s² 2s¹' },
    { name: 'Beryllium (Be)', elect: '1s² 2s²' },
    { name: 'Boron (B)', elect: '1s² 2s² 2p¹' },
    { name: ' Carbon (C)', elect: '1s² 2s² 2p²' },
    { name: 'Nitrogen (N)', elect: '1s² 2s² 2p³' },
    { name: 'Oxygen (O)', elect: '1s² 2s² 2p⁴' },
    { name: 'Fluorine (F)', elect: '1s² 2s² 2p⁵' },
    { name: 'Neon (Ne)', elect: '1s² 2s² 2p⁶' },
    { name: 'Sodium (Na)', elect: '1s² 2s² 2p⁶ 3s¹' },
    { name: 'Magnesium (Mg)', elect: '1s² 2s² 2p⁶ 3s²' },
    { name: 'Aluminum (Al):', elect: '1s² 2s² 2p⁶ 3s² 3p¹' },
    { name: 'Silicon (Si)', elect: '1s² 2s² 2p⁶ 3s² 3p²' },
    { name: 'Phosphorus (P):', elect: '1s² 2s² 2p⁶ 3s² 3p³' },
    { name: 'Sulfur (S)', elect: '1s² 2s² 2p⁶ 3s² 3p⁴' },
    { name: 'Chlorine (Cl)', elect: '1s² 2s² 2p⁶ 3s² 3p⁵' },
    { name: 'Argon (Ar)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶' },
    { name: 'Potassium (K)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹' },
    { name: 'Calcium (Ca)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²' },
    { name: 'Scandium (Sc)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹' },
    { name: 'Titanium (Ti)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d²' },
    { name: 'Vanadium (V)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³' },
    { name: 'Chromium (Cr)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵' },
    { name: 'Manganese (Mn)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁵' },
    { name: 'Iron (Fe)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶' },
    { name: 'Cobalt (Co)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁷' },
    { name: ' Nickel (Ni)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁸' },
    { name: 'Copper (Cu)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁹' },
    { name: 'Zinc (Zn)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰' },
    { name: 'Gallium (Ga)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p¹' },
    { name: 'Germanium (Ge)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p²' },
    { name: 'Arsenic (As)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p³' },
    { name: 'Selenium (Se)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁴' },
    { name: 'Bromine (Br)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵' },
    { name: 'Krypton (Kr)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶' },
    { name: 'Rubidium (Rb)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹' },
    { name: 'Strontium (Sr)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s²' },
    { name: 'Yttrium (Y)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹' },
    { name: 'Zirconium (Zr)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d²' },
    { name: 'Niobium (Nb)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d³' },
    { name: 'Molybdenum (Mo)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d⁴' },
    { name: 'Technetium (Tc)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d⁵' },
    { name: 'Ruthenium (Ru)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d⁶' },
    { name: 'Rhodium (Rh):', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d⁷' },
    { name: 'Palladium (Pd)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d⁸' },
    { name: 'Silver (Ag)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d¹⁰' },
    { name: 'Cadmium (Cd)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰' },
    { name: 'Indium (In)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p¹' },
    { name: 'Tin (Sn)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p²' },
    { name: 'Antimony (Sb)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p³' },
    { name: 'Tellurium (Te)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁴' },
    { name: 'Iodine (I)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁵' },
    { name: 'Xenon (Xe)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶' },
    { name: 'Cesium (Cs)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s¹' },
    { name: 'Barium (Ba)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s²' },
    { name: 'Lanthanum (La)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d¹' },
    { name: 'Cerium (Ce)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d²' },
    { name: 'Praseodymium (Pr)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d³' },
    { name: 'Neodymium (Nd)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d⁴' },
    { name: 'Promethium (Pm)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d⁵' },
    { name: 'Samarium (Sm)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d⁶' },
    { name: 'Europium (Eu)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d⁷' },
    { name: 'Gadolinium (Gd)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d⁸' },
    { name: 'Terbium (Tb)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d⁹' },
    { name: 'Dysprosium (Dy)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d¹⁰' },
    { name: 'Holmium (Ho)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d¹¹' },
    { name: 'Erbium (Er)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d¹²' },
    { name: 'Thulium (Tm)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d¹³' },
    { name: 'Ytterbium (Yb)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d¹⁴' },
    { name: 'Lutetium (Lu)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹' },
    { name: 'Hafnium (Hf)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d²' },
    { name: 'Tantalum (Ta)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d³' },
    { name: 'Tungsten (W)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁴' },
    { name: 'Rhenium (Re)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁵' },
    { name: 'Osmium (Os)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁶' },
    { name: 'Iridium (Ir)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁷' },
    { name: 'Platinum (Pt)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁸' },
    { name: 'Gold (Au)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰' },
    { name: 'Mercury (Hg)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p¹' },
    { name: 'Thallium (Tl)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p²' },
    { name: 'Lead (Pb)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p³' },
    { name: 'Bismuth (Bi)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁴' },
    { name: 'Polonium (Po)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁵' },
    { name: 'Astatine (At)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶' },
    { name: 'Radon (Rn)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s¹' },
    { name: 'Francium (Fr)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s²' },
    { name: 'Radium (Ra)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 6d¹' },
    { name: 'Actinium (Ac)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 6d²' },
    { name: 'Thorium (Th)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁰ 6d²' },
    { name: 'Protactinium (Pa)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f² 6d¹ ' },
    { name: 'Uranium (U)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f³ 6d¹⁰' },
    { name: 'Neptunium (Np)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁴ 6d¹⁰' },
    { name: 'Plutonium (Pu)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁶ 6d¹⁰' },
    { name: 'Americium (Am)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁷ 6d¹⁰' },
    { name: 'Curium (Cm)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁷ 6d¹⁰' },
    { name: 'Berkelium (Bk)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁹ 6d¹⁰' },
    { name: 'Californium (Cf)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁰ 6d¹⁰' },
    { name: 'Einsteinium (Es)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹¹ 6d¹⁰' },
    { name: 'Fermium (Fm)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹² 6d¹⁰' },
    { name: 'Mendelevium (Md)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹³ 6d¹⁰' },
    { name: 'Nobelium (No)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰' },
    { name: 'Lawrencium (Lr)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p¹' },
    { name: 'Rutherfordium (Rf)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d² 7p¹' },
    { name: 'Dubnium (Db)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d³ 7p¹' },
    { name: 'Seaborgium (Sg)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹' },
    { name: 'Bohrium (Bh)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁵ 7p¹' },
    { name: 'Hassium (Hs)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁶ 7p¹' },
    { name: 'Meitnerium (Mt)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁷ 7p¹' },
    { name: 'Darmstadtium (Ds)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁸ 7p¹' },
    { name: 'Roentgenium (Rg)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d⁹ 7p¹' },
    { name: 'Copernicium (Cn)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p¹' },
    { name: 'Nihonium (Nh)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p¹ 8s¹' },
    { name: 'Flerovium (Fl)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p² 8s¹' },
    { name: 'Moscovium (Mc)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p³ 8s¹' },
    { name: 'Livermorium (Lv)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁴ 8s¹' },
    { name: 'Tennessine (Ts)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁵ 8s¹' },
    { name: 'Oganesson (Og)', elect: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁶ 8s¹' },

  ];
  molecularToEmpirical = [
    { compound: 'Aspirin:', molecularFor: 'C9H8O4' },
    { compound: 'Glucose:', molecularFor: 'C6H12O6' },
    { compound: 'Water:', molecularFor: 'H2O' },
    { compound: 'Ammonia:', molecularFor: 'NH3' },
  ];
  showFirstLetter: any;
  firstLetter: any;
  atomicMass: any;
  totalPer: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private dialog: MatDialog,
    private sessionService: SessionService,
    private toasterService: ToasterService,
    private userService: UserService,
    private httpService: HttpService,
    titleService: Title,
    public roleService:RoleService
  ) {
  
    this.createForms();
    titleService.setTitle('Periodic Table');
    this.createForm();
  
  }
  highlightElement(highlightState: HighlightState) {
    this.highlightState = highlightState;
  }
  

  setCurrentAtomCategory(category: string) {
    this.category = category;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  ngOnInit(): void { }

  createForm() {
    this.supportForm = this.fb.group({
      calculatePer: new FormControl(),
      empFormula:new FormControl(),

    })
  }
  createForms(){
    this.molesForm = this.fb.group({
      volume :new FormControl(),
      massGiven:new FormControl(),
      moleculesGiven:new FormControl(),
      chemicalCompund:new FormControl(),
    })
  }
  submitSupportForm() {
    this.supportForm.reset
    // this.roleService.getpostManUrl().subscribe((res:any)=>{
    //   console.log(res)
    // })
    debugger
    let inputFormula = this.supportForm.value.calculatePer;
    let elementsInFormula = inputFormula.match(/[A-Z][a-z]?[0-9]*/g) || []; // Allow for numbers after the element symbols
    this.matchingElements = [];
    elementsInFormula.forEach(inputElement => {
      let matches = inputElement.match(/[A-Za-z]+|[0-9]+/g);
      let elementSymbol = matches[0];
      let elementCount = matches.length > 1 ? parseInt(matches[1]) : 1;

      let matchingElement = this.perodicTable.find(element => element.name.startsWith(elementSymbol));
      if (matchingElement) {
        this.matchingElements.push({ ...matchingElement, count: elementCount });
      }
    });

    if (this.matchingElements.length > 0) {
      console.log('Elements found:');
      this.matchingElements.forEach(element => {
        console.log(`${element.name} - Atomic Mass: ${element.AtomicMass} - Count: ${element.count}`);
      });

      // Calculate percentage composition
      let totalAtomicMass = this.matchingElements.reduce((total, element) => total + (element.AtomicMass * element.count), 0);
      this.atomicMass = totalAtomicMass.toFixed(4);
      console.log(`Total Atomic Mass: ${this.atomicMass}`);

      console.log('Percentage Composition:');
      this.matchingElements.forEach(element => {
        let percentage = ((element.AtomicMass * element.count) / totalAtomicMass) * 100;
        console.log(`${element.name} - Percentage: ${percentage.toFixed(2)}%`);
      });
    } else {
      console.log(`No elements found in the periodic table for the given formula: ${inputFormula}`);
    }
  }

  submitEmpForm() {
    const molecularFormula = this.supportForm.get('empFormula').value;
    const empiricalFormula = this.convertToEmpirical(molecularFormula);
    this.supportForm.get('empFormula').setValue(empiricalFormula);

    console.log('Number of moles:', this.numberOfMoles);
    let inputFormula = this.supportForm.value.empFormula;
    let elementsInFormula = inputFormula.match(/[A-Z][a-z]?[0-9]*/g) || []; // Allow for numbers after the element symbols
    this.matchingElements = [];
    elementsInFormula.forEach(inputElement => {
      let matches = inputElement.match(/[A-Za-z]+|[0-9]+/g);
      let elementSymbol = matches[0];
      let elementCount = matches.length > 1 ? parseInt(matches[1]) : 1;
      let matchingElement = this.perodicTable.find(element => element.name.startsWith(elementSymbol));
      if (matchingElement) {
        this.matchingElements.push({ ...matchingElement, count: elementCount });
      }
    });

    if (this.matchingElements.length > 0) {
      console.log('Elements found:');
      this.matchingElements.forEach(element => {
        console.log(`${element.name} - Atomic Mass: ${element.AtomicMass} - Count: ${element.count}`);
      });

      // Calculate percentage composition
      let totalAtomicMass = this.matchingElements.reduce((total, element) => total + (element.AtomicMass * element.count), 0);
      this.atomicMass = totalAtomicMass.toFixed(4);
      console.log(`Total Atomic Mass: ${this.atomicMass}`);

      console.log('Percentage Composition:');
      this.matchingElements.forEach(element => {
        let percentage = ((element.AtomicMass * element.count) / totalAtomicMass) * 100;
        console.log(`${element.name} - Percentage: ${percentage.toFixed(2)}%`);
      });
    } else {
      console.log(`No elements found in the periodic table for the given formula: ${inputFormula}`);
    }




  }

 submitMolesForm() {
    const volume = this.molesForm.get('volume').value;
    const avagadroNumber = 6.022*10^23;
    const moleculesGivenInput = this.molesForm.get('moleculesGiven').value;
   this.moleculesGiven = parseFloat(moleculesGivenInput);
    const avogadroNumber = 6.022e23;

    console.log('moleculesGivenInput:', moleculesGivenInput);
    console.log('moleculesGiven:',this.moleculesGiven);

    this.moles = this.moleculesGiven / avogadroNumber;

    if (!isNaN(this.moles)) {
        this.moles = this.moles.toFixed(4);
        console.log('Number of moles:', this.moles);
    } else {
        // Handle the case where the result is NaN
        console.log('Error: The result is NaN. Deleting NaN.');
        delete this.moles;
    }
    

    

    const constantValue = 22.4;
    this.numberOfMoles = volume / constantValue;
    const massGiven = this.molesForm.get('massGiven').value;

    console.log('Number of moles:', this.numberOfMoles);
    let inputFormula = this.molesForm.value.chemicalCompund;
    let elementsInFormula = inputFormula.match(/[A-Z][a-z]?[0-9]*/g) || []; // Allow for numbers after the element symbols
    this.matchingElements = [];
    elementsInFormula.forEach(inputElement => {
      let matches = inputElement.match(/[A-Za-z]+|[0-9]+/g);
      let elementSymbol = matches[0];
      let elementCount = matches.length > 1 ? parseInt(matches[1]) : 1;
      let matchingElement = this.perodicTable.find(element => element.name.startsWith(elementSymbol));
      if (matchingElement) {
        this.matchingElements.push({ ...matchingElement, count: elementCount });
      }
    });

    if (this.matchingElements.length > 0) {
      console.log('Elements found:');
      this.matchingElements.forEach(element => {
        console.log(`${element.name} - Atomic Mass: ${element.AtomicMass} - Count: ${element.count}`);
      });

      // Calculate percentage composition
      let totalAtomicMass = this.matchingElements.reduce((total, element) => total + (element.AtomicMass * element.count), 0);
      this.atomicMass = totalAtomicMass.toFixed(4);
      console.log(`Total Atomic Mass: ${this.atomicMass}`);

      console.log('Percentage Composition:');
      this.matchingElements.forEach(element => {
        let percentage = ((element.AtomicMass * element.count) / totalAtomicMass) * 100;
        console.log(`${element.name} - Percentage: ${percentage.toFixed(2)}%`);
      });
    } else {
      console.log(`No elements found in the periodic table for the given formula: ${inputFormula}`);
    }

    this.totalAotoMicMass = massGiven / this.atomicMass ;
    this.totalAotoMicMass =     this.totalAotoMicMass.toFixed(4);
    
    console.log('totalAotoMicMass',this.totalAotoMicMass)
   console.log('API',this.apiURL)
}



  reset(){
    this.molesForm.reset();
    this.numberOfMoles = '';
    this.totalAotoMicMass = '';
    this.moles = '';
  }

  convertToEmpirical(molecularFormula: string): string {
    // Implement your conversion logic here
    // This is a very basic example and may not cover all cases

    // Split the formula into individual elements and their counts
    const elements = molecularFormula.match(/[A-Z][a-z]*\d*/g) || [];

    // Calculate the greatest common divisor (GCD) of the counts
    const gcd = this.calculateGCD(elements.map((element) => this.getElementCount(element)));

    // Divide each count by the GCD to get the empirical formula
    const empiricalElements = elements.map((element) =>
      this.divideElementCount(element, gcd)
    );

    // Join the elements to form the empirical formula
    return empiricalElements.join('');
  }

  private getElementCount(element: string): number {
    const countMatch = element.match(/\d+/);
    return countMatch ? parseInt(countMatch[0], 10) : 1;
  }

  private calculateGCD(numbers: number[]): number {
    return numbers.reduce((a, b) => this.gcd(a, b), numbers[0]);
  }

  private gcd(a: number, b: number): number {
    return b === 0 ? a : this.gcd(b, a % b);
  }

  private divideElementCount(element: string, divisor: number): string {
    const count = this.getElementCount(element);
    return count > 1 ? element.replace(/\d+/, (num) => (parseInt(num, 10) / divisor).toString()) : element;
  }
  
  manageHospital() {
    this.authService.encryptKey('isManageProfile', 0);
    this.router.navigate(['pages/admin/hospital/edit-hospital']);
  }

  manageForms() {
    this.router.navigate(['pages/admin/manage-forms']);
  }
  elementd(templateRef: TemplateRef<any>) {
    this.elemtsTrueFalse = false
    this.dialog.open(templateRef, {
      width: "100%",
      height: "100%",
      disableClose: true

    })
    this.supportForm.reset();
  }

  support(templateRef: TemplateRef<any>) {
    this.elemtsTrueFalse = false
    this.dialog.open(templateRef, {
      width: "100%",
      height: "100%",
      disableClose: true

    })
    this.supportForm.reset();
  }
  composition(templateRef: TemplateRef<any>) {
    this.supportForm.reset();

    this.elemtsTrueFalse = false
    this.dialog.open(templateRef, {
      width: "100%",
      height: "50%",
      disableClose: true

    })
    this.supportForm.reset();

  }

  electrnicConfi(templateRef: TemplateRef<any>) {
    this.elemtsTrueFalse = false
    this.dialog.open(templateRef, {
      width: "100%",
      height: "100%",
      disableClose: true

    })
    this.supportForm.reset();

  }
  molecularFormula(templateRef: TemplateRef<any>) {
    this.elemtsTrueFalse = false
    this.dialog.open(templateRef, {
      width: "50%",
      height: "50%",
      disableClose: true

    })
    this.supportForm.reset();

  }
  mole(templateRef: TemplateRef<any>) {
    this.elemtsTrueFalse = false
    this.dialog.open(templateRef, {
      width: "100%",
      height: "100%",
      disableClose: true

    })
    this.supportForm.reset();

  }

  organicCompund(templateRef: TemplateRef<any>) {
    this.elemtsTrueFalse = false
    this.dialog.open(templateRef, {
      width: "100%",
      height: "100%",
      disableClose: true

    })
    this.supportForm.reset();

  }
  onLogout() {
    localStorage.clear();
    this.authService.logout();
    this.router.navigate(['/']);
  }
  getProfile() {
    this.router.navigate(['/pages/profile/']);
  }

  setHeader() {
    let path = this.router.url.split('/')[2];
    switch (
    decodeURIComponent(path)
    // case PageTitle.dashboard: {
    //   this.title = 'Dashboard';
    //   break;
    // }
    // case PageTitle.user: {
    //   this.title = 'Manage User';
    //   break;
    // }
    // case PageTitle.subscription: {
    //   this.title = 'Subscription Plan';
    //   break;
    // }
    // case PageTitle.supplier: {
    //   this.title = 'Supplier List';
    //   break;
    // }

    // case PageTitle.customer: {
    //   this.title = 'Customer List';
    //   break;
    // }
    // case PageTitle.tickets: {
    //   this.title = 'Support Ticket List';
    //   break;
    // }
    // case PageTitle.terms: {
    //   this.title = 'Terms & Conditions';
    //   break;
    // }
    // case PageTitle.profile: {
    //   this.title = 'Profile';
    //   break;
    // }
    // case PageTitle.rental: {
    //   this.title = 'Rental Management';
    //   break;
    // }
    // case PageTitle.linkbusiness: {
    //   this.title = 'Manage Linked Business';
    //   break;
    // }
    ) {
    }
  }

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement | null;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, 
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, 
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, 
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, 
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, 
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, 
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, 
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, 
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },

  {
    position: 11,
    name: 'Sodium',
    weight: 22.9897,
    symbol: 'Na',
    description: `Sodium /ˈsoʊdiəm/ is a chemical element with symbol Na (from Ancient Greek Νάτριο) and atomic number 11. It is a soft, silver-white, highly reactive metal. In the Periodic table it is in column 1 
            (alkali metals), and shares with the other six elements in that column that it has a single electron in its outer shell, which it readily donates, creating a positively charged atom - a cation.`
  },
  {
    position: 12,
    name: 'Magnesium',
    weight: 24.304,
    symbol: 'Mg',
    description: `Magnesium is a chemical element of the periodic table with chemical symbol Mg and atomic number 12 with an atomic weight of 24.304 u and is classed as alkaline earth metal and is part of group 2 (alkaline earth metal). Magnesium is solid at room temperature.`
  },
  {
    position: 13,
    name: 'Aluminium',
    weight: 26.9815,
    symbol: 'Al',
    description: `Aluminium is a chemical element of the periodic table with chemical symbol Al and atomic number 13 with an atomic weight of 26.9815 u and is classed as post-transition metal and is part of group 13 (boron group). Aluminium is solid at room temperature.`
  },
  {
    position: 14,
    name: 'Silicon',
    weight: 28.084,
    symbol: 'Si',
    description: `Silicon is a chemical element of the periodic table with chemical symbol Si and atomic number 14 with an atomic weight of 28.084 u and is classed as metalloid and is part of group 14 (carbon group). Silicon is solid at room temperature.`
  },
   {
    position: 15,
    name: 'Phosphorus',
    weight: 30.9738,
    symbol: 'P',
    description: `Phosphorus is a chemical element of the periodic table with chemical symbol P and atomic number 15 with an atomic weight of 30.9738 u and is classed as nonmetal and is part of group 15 (nitrogen group). Phosphorus is solid at room temperature.`
  },

];



























