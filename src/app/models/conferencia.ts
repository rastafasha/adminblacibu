export class Conferencia{
  constructor(
    public id: number,
    public user_id: any,
    public tiporegistro_id: number,
    public conf_con_aval_academico_titulo: string,
    public conf_con_aval_academico_evento: string,
    public conf_con_aval_academico_pdf: string,
    public conf_con_aval_academico_status_id: string,

    public conf_sin_aval_academico_titulo: string,
    public conf_sin_aval_academico_evento: string,
    public conf_sin_aval_academico_pdf: string,
    public conf_sin_aval_academico_status_id: string,

    public trab_pres_con_aval_titulo: string,
    public trab_pres_con_aval_evento: string,
    public trab_pres_con_aval_modalidad: string,
    public trab_pres_con_aval_pdf: string,
    public trab_pres_con_aval_status_id: string,

    public trab_pres_sin_aval_titulo: string,
    public trab_pres_sin_aval_evento: string,
    public trab_pres_sin_aval_modalidad: string,
    public trab_pres_sin_aval_pdf: string,
    public trab_pres_sin_aval_status_id: string,

    public trab_publicados_nombre: string,
    public trab_publicados_ano: string,
    public trab_publicados_revisa: string,
    public trab_publicados_pdf: string,
    public trab_publicados_status_id: string,
  ){}
}
