export interface ISalesOrders {
    id_: string,
    name: string,
    orderMonth: number,
    orderDay: number,    
    orderYear: number,
    region: string,
    rep: string,
    item: string,
    units: number,
    unitsCosts: number,
    total: number
}

class SalesOrders implements ISalesOrders{
    public id_: string;
    public name: string;
    public orderMonth: number;
    public orderDay: number;    
    public orderYear: number;
    public region: string;    
    public rep: string;
    public item: string;
    public units: number;
    public unitsCosts: number;
    public total: number;

    constructor(nameOrOrderSales: string | ISalesOrders,
            id_: string, 
            name: string,
            orderMonth: number,             
            orderDay: number,
            orderYear: number,
            region: string, 
            rep: string,
            item: string, 
            units: number, 
            unitsCosts: number, 
            total: number, 
        ) {
        if(typeof nameOrOrderSales === 'string'){
            this.name = nameOrOrderSales;
            this.id_ = id_;            
            this.orderMonth = orderMonth;
            this.orderDay = orderDay;
            this.orderYear = orderYear;            
            this.region = region; 
            this.rep = rep;
            this.item = item;
            this.units = units;
            this.unitsCosts = unitsCosts;
            this.total = total;
        }else{
            this.name = nameOrOrderSales.name;
            this.id_ = nameOrOrderSales.id_;            
            this.orderMonth = nameOrOrderSales.orderMonth;
            this.orderDay = nameOrOrderSales.orderDay;
            this.orderYear = nameOrOrderSales.orderYear;      
            this.region = nameOrOrderSales.region;
            this.rep = nameOrOrderSales.rep;
            this.item = nameOrOrderSales.item;
            this.units = nameOrOrderSales.units;
            this.unitsCosts = nameOrOrderSales.unitsCosts;
            this.total = nameOrOrderSales.total;            
        }
    }


    // public id: number;
    // public name: string;
    // public email: string;

    // constructor(nameOrUser: string | IOng, email?: string, id?: number) {
    //     if (typeof nameOrUser === 'string') {
    //         this.name = nameOrUser;
    //         this.email = email || '';
    //         this.id = id || -1;
    //     } else {
    //         this.name = nameOrUser.name;
    //         this.email = nameOrUser.email;
    //         this.id = nameOrUser.id;
    //     }
    // }
}

export default SalesOrders;


// fechaDeVigencia: number,
// direccionComercial: string,
// barrioComercial: string,
// MunicipioComercial: string,    
// direccionDeNotificacion: string,
// municipioDeNotificacion: string,
// telefonoDeNotificacion1: number,
// telefonoDeNotificacion2: number,
// emailDeNotificacion: string,
// ciiu1: string,
// ciiu2: string,
// librosComercio: boolean,
// ctrEmbargo: boolean,
// ubicacion: number,
// claGenEsadl: string,
// claEspeEsadl: string,
// beneficioLey1780Mat: boolean,
// cumLey1780Ren: boolean,
// manLey1780Ren: boolean,
// TamañoDeLaEmpresa: string,
// personal: number,
// activoCorriente: number,
// activoNoCorriente: number,
// activoTotal: number,
// pasivoCorriente: number,
// pasivoALargoPlazo: number,
// PasivoTotal: number,
// patrimonio: number,
// pasivoMasPatrimonio: number,
// ingresosOperacionales: number,
// ingresosNoOperacionales: number,
// gastosOperacionales: number,
// gastosNoOperacionales: number,
// costosDeVentas: number,
// gastosImpuestos: number,
// utilidadesOperacionales: number,
// utilidadesNetas: number,
// grupoNiif: string,
// yearDeLosDatos: number,
// fechaDeLosDatos: number,
// fechaDePagoDeRenta2015: number,
// fechaDePagoDeRenta2016: number,
// fechaDePagoDeRenta2017: number,
// fechaDePagoDeRenta2018: number,
// fechaDePagoDeRenta2019: number,
// activos2015: number,
// activos2016: number,
// activos2017: number,
// activos2018: number,
// activos2019: number,
// tieneLibros: boolean,
// representanteLegal: number,
// NombreDelRepresentanteLegal: string,
// numeroIdeDelSuplente: number,
// nombreDelSuplente: string,
// autEnv: boolean

// public emailComercial: string; 
//     public fechaDeConstitucion: number;
//     public fechaDeVigencia: number;
//     public direccionComercial: string;
//     public barrioComercial: string;
//     public MunicipioComercial: string;    
//     public direccionDeNotificacion: string;
//     public municipioDeNotificacion: string;
//     public telefonoDeNotificacion1: number;
//     public telefonoDeNotificacion2: number;
//     public emailDeNotificacion: string;
//     public ciiu1: string;
//     public ciiu2: string;
//     public librosComercio: boolean;
//     public ctrEmbargo: boolean;
//     public ubicacion: number;
//     public claGenEsadl: string;
//     public claEspeEsadl: string;
//     public beneficioLey1780Mat: boolean;
//     public cumLey1780Ren: boolean;
//     public manLey1780Ren: boolean;
//     public TamañoDeLaEmpresa: string;
//     public personal: number;
//     public activoCorriente: number;
//     public activoNoCorriente: number;
//     public activoTotal: number;
//     public pasivoCorriente: number;
//     public pasivoALargoPlazo: number;
//     public PasivoTotal: number;
//     public patrimonio: number;
//     public pasivoMasPatrimonio: number;
//     public ingresosOperacionales: number;
//     public ingresosNoOperacionales: number;
//     public gastosOperacionales: number;
//     public gastosNoOperacionales: number;
//     public costosDeVentas: number;
//     public gastosImpuestos: number;
//     public utilidadesOperacionales: number;
//     public utilidadesNetas: number;
//     public grupoNiif: string;
//     public yearDeLosDatos: number;
//     public fechaDeLosDatos: number;
//     public fechaDePagoDeRenta2015: number;
//     public fechaDePagoDeRenta2016: number;
//     public fechaDePagoDeRenta2017: number;
//     public fechaDePagoDeRenta2018: number;
//     public fechaDePagoDeRenta2019: number;
//     public activos2015: number;
//     public activos2016: number;
//     public activos2017: number;
//     public activos2018: number;
//     public activos2019: number;
//     public tieneLibros: boolean;
//     public representanteLegal: number;
//     public NombreDelRepresentanteLegal: string;
//     public numeroIdeDelSuplente: number;
//     public nombreDelSuplente: string;
//     public autEnv: boolean

// telefonoComercial1: string,            
//             fechaDeConstitucion: number,
//             fechaDeVigencia: number,
//             direccionComercial: string,
//             barrioComercial?: string,
//             MunicipioComercial?: string,        
//             direccionDeNotificacion?: string,   
//             municipioDeNotificacion?: string,   
//             telefonoDeNotificacion1?: number,   
//             telefonoDeNotificacion2?: number,   
//             emailDeNotificacion?: string,
//             ciiu1?: string,
//             ciiu2?: string,
//             librosComercio: boolean,
//             ctrEmbargo: boolean,
//             ubicacion?: number,
//             claGenEsadl?: string,
//             claEspeEsadl?: string,
//             beneficioLey1780Mat: boolean,
//             cumLey1780Ren: boolean,
//             manLey1780Ren: boolean,
//             TamañoDeLaEmpresa: string,
//             personal: number,
//             activoCorriente?: number,
//             activoNoCorriente?: number,
//             activoTotal?: number,
//             pasivoCorriente?: number,
//             pasivoALargoPlazo?: number,
//             PasivoTotal?: number,
//             patrimonio?: number,
//             pasivoMasPatrimonio?: number,
//             ingresosOperacionales?: number,
//             ingresosNoOperacionales?: number,   
//             gastosOperacionales?: number,
//             gastosNoOperacionales?: number,
//             costosDeVentas?: number,
//             gastosImpuestos?: number,
//             utilidadesOperacionales?: number,   
//             utilidadesNetas?: number,
//             grupoNiif?: string,
//             yearDeLosDatos?: number,
//             fechaDeLosDatos?: number,
//             fechaDePagoDeRenta2015?: number,    
//             fechaDePagoDeRenta2016?: number,    
//             fechaDePagoDeRenta2017?: number,    
//             fechaDePagoDeRenta2018?: number,    
//             fechaDePagoDeRenta2019?: number,    
//             activos2015?: number,
//             activos2016?: number,
//             activos2017?: number,
//             activos2018?: number,
//             activos2019?: number,
//             tieneLibros?: boolean,
//             representanteLegal: number,
//             NombreDelRepresentanteLegal: string,
//             numeroIdeDelSuplente?: number,
//             nombreDelSuplente?: string,
//             autEnv: boolean


//this.telefonoComercial1;
            // this.fechaDeConstitucion;
            // this.fechaDeVigencia; 
            // this.direccionComerial;
            // this.barrioComercial; 
            // this.MunicipioComercial;
            // this.direccionDeNotificacion;
            // this.municipioDeNotificacion?;
            // this.telefonoDeNotificacion1?;
            // this.telefonoDeNotificacion2?;
            // this.emailDeNotificacion?;
            // this.ciiu1?;     
            // this.ciiu2?;
            // this.librosComercio;
            // this.ctrEmbargo;
            // this.ubicacion?;
            // this.claGenEsadl?;
            // this.claEspeEsadl?;
            // this.beneficioLey1780Mat;
            // this.cumLey1780Ren;
            // this.manLey1780Ren;
            // this.TamañoDeLaEmpresa;
            // this.personal;        
            // this.activoCorriente?;
            // this.activoNoCorriente?;
            // this.activoTotal?;
            // this.pasivoCorriente?;
            // this.pasivoALargoPlazo?;
            // this.PasivoTotal?;
            // this.patrimonio?;
            // this.pasivoMasPatrimonio?;
            // this.ingresosOperacionales?;
            // this.ingresosNoOperacionales?;
            // this.gastosOperacionales?;
            // this.gastosNoOperacionales?;
            // this.costosDeVentas?;
            // this.gastosImpuestos?;
            // this.utilidadesOperacionales?;
            // this.utilidadesNetas?; 
            // this.grupoNiif?;
            // this.yearDeLosDatos?;
            // this.fechaDeLosDatos?;
            // this.fechaDePagoDeRenta2015?;
            // this.fechaDePagoDeRenta2016?;
            // this.fechaDePagoDeRenta2017?;
            // this.fechaDePagoDeRenta2018?;
            // this.fechaDePagoDeRenta2019?;
            // this.activos2015?  
            // this.activos2016?  
            // this.activos2017?  
            // this.activos2018?  
            // this.activos2019?  
            // this.tieneLibros?  
            // this.representanteLegal;
            // this.NombreDelRepresentanteLegal;
            // this.numeroIdeDelSuplente?;
            // this.nombreDelSuplente?;
            // this.autEnv;