export class Constancia{
    constructor(
      public id: number,
      public user_id: any,
      public tiporegistro_id: number,
      public const_miembro_activo_pdf: string,
      public const_miembro_activo_status_id: string,
      public curriculum_pdf: string,
      public curriculum_status_id: string,
      public const_practica_privada_pdf: string,
      public const_practica_privada_status_id: string,
      public distinciones_premios_pdf: string,
      public distinciones_premios_status_id: string,
    ){}
  }
