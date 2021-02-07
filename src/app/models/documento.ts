export class Documento{
    constructor(
      public id: number,
      public user_id: any,
      public tiporegistro_id: number,
      public pdf_titulo_odontologo: string,
      public pdf_titulo_odontologo_status_id: string,
      public pdf_matricula_odontologo: string,
      public pdf_matricula_odontologo_status_id: string,
      public pdf_titulo_espec_bucomax: string,
      public pdf_titulo_espec_bucomax_status_id: string,
      public pdf_matricula_bucomax: string,
      public pdf_matricula_bucomax_status_id: string,
      public pdf_residencia_especializacion: string,
      public pdf_residencia_especializacion_status_id: string,
      public pdf_constancia_miembro: string,
      public pdf_constancia_miembro_status_id: string
    ){}
  }
