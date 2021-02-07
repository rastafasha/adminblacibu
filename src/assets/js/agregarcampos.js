var room = 1;

function room_fields() {

    room++;
    var objTo = document.getElementById('room_fields');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="row"><div class=" col-xs-12 col-sm-6 nopadding"><label>Nombre de la institución</label><input type="text" formControlName="certificadoInstitucion" id="certificadoInstitucion" class="form-control"></div><div class=" col-xs-12 col-sm-6 nopadding"><label>Cargo desempeñado </label><input type="text" formControlName="certificadoCargo" id="certificadoCargo" class="form-control"></div><div class=" col-xs-12 col-sm-6 nopadding"><label>Tiempo en años </label><input type="text" formControlName="certificadoTiempo" id="certificadoTiempo" class="form-control"></div><div class=" col-xs-12 col-sm-6 nopadding"><label>Institución que lo avala</label><input type="text" formControlName="certificadoAvaluo" id="certificadoAvaluo" class="form-control"></div><div class=" col-xs-12 col-sm-6 nopadding"><label>Anexar Documento Pdf</label> <br><br><input type="file" id="certificadoPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div></div></div>';


    objTo.appendChild(divtest);
}

function remove_room_fields(rid) {
    $('.removeclass' + rid).remove();
}



// conferencias certificacion

function room_fields1() {

    room++;
    var objTo = document.getElementById('room_fields1');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-12 col-md-6"><label>Título de la conferencia  </label><input type="text" formControlName="conferenciaCAvalTitulo" id="conferenciaCAvalTitulo" class="form-control" ></div><div class="form-group camp col-12 col-md-6"><label>Evento en el que fue presentado </label><input type="text" formControlName="conferenciaCAvalEvento" id="conferenciaCAvalEvento" class="form-control" ></div><div class=" col-12 camp" style="margin-bottom:20px"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="conferenciaCAvalPdf" (change)="onSelectedFile($event)" title="Anexar Documento Pdf" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields1(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';
    // divtest.innerHTML = '<div class="row"><div class="form-group camp col-12 col-md-3"><label>Título de la conferencia  </label><input type="text" formControlName="conferenciaCAvalTitulo" id="conferenciaCAvalTitulo" class="form-control" ></div><div class="form-group camp col-12 col-md-3"><label>Título de la conferencia  </label><input type="text" formControlName="conferenciaCAvalEvento" id="conferenciaCAvalEvento" class="form-control" ></div><div class=" col-12 col-md-3 nopadding"><label>Anexar Documento Pdf</label> <br><br><input type="file" id="conferenciaCAvalPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields2(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div></div></div>';

    objTo.appendChild(divtest);
}

function remove_room_fields1(rid) {
    $('.removeclass' + rid).remove();
}


function room_fields2() {

    room++;
    var objTo = document.getElementById('room_fields2');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Título de la conferencia  </label><input type="text" formControlName="conferenciaSAvalTitulo" id="conferenciaSAvalTitulo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Evento en el que fue presentado  </label><input type="text" formControlName="conferenciaSAvalEvento" id="conferenciaSAvalEvento" class="form-control" ></div><div class=" col-12  camp " style="margin-bottom:20px"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="conferenciaSAvalPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields2(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';

    objTo.appendChild(divtest);
}

function remove_room_fields2(rid) {
    $('.removeclass' + rid).remove();
}


function room_fields3() {

    room++;
    var objTo = document.getElementById('room_fields3');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Titulo del trabajo  </label><input type="text" formControlName="trabajoCAvalTitulo" id="trabajoCAvalTitulo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Evento en el que fue presentado</label><input type="text" formControlName="trabajoCAvalEvento" id="trabajoCAvalEvento" class="form-control" ></div><div class="form-group camp col-12 col-sm-6"><label>Modalidad (presentación oral o poster) </label><select class="form-control form-control-line" formControlName="trabajoCAvalModalidad" id="trabajoCAvalModalidad"><optgroup label="Modalidad"><option value="">Seleccione</option><option value="oral">Oral</option><option value="poster">Poster</option></optgroup></select></div><div class=" col-12 col-md-6 camp" style="margin-bottom:20px"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="trabajoCAvalTituloPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields3(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span>  </button></div><br><br></div>';


    objTo.appendChild(divtest);
}

function remove_room_fields3(rid) {
    $('.removeclass' + rid).remove();
}



function room_fields4() {

    room++;
    var objTo = document.getElementById('room_fields4');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Título del trabajo </label><input type="text" formControlName="trabajoSAvalTitulo" id="trabajoSAvalTitulo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Evento en el que fue presentado </label><input type="text" formControlName="trabajoSAvalEvento" id="trabajoSAvalEvento" class="form-control" ></div><div class="form-group camp col-12 col-sm-6"><label>Modalidad (presentación oral o poster) </label><select class="form-control form-control-line" formControlName="trabajoSAvalModalidad" id="trabajoCAvalModalidad"><optgroup label="Modalidad"><option value="">Seleccione</option><option value="oral">Oral</option><option value="poster">Poster</option></optgroup></select></div><div class=" col-12 col-md-6 camp" style="margin-bottom:20px"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="trabajoSAvalTituloPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields4(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';
    // divtest.innerHTML = '<div class="row"><div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del trabajo </label><input type="text" formControlName="trabajosPublicadosNombre" id="trabajosPublicadosNombre" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año de publicación</label><input type="text" formControlName="trabajosPublicadosAno" id="trabajosPublicadosAno" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Revista Científica </label><input type="text" formControlName="trabajosPublicadosRevCient" id="trabajosPublicadosRevCient" class="form-control" ></div><div class=" col-12 col-md-6 nopadding"><label>Anexar Documento Pdf</label> <br><br><input type="file" id="trabajosPublicadosPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields6(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div></div></div>';


    objTo.appendChild(divtest);
}

function remove_room_fields4(rid) {
    $('.removeclass' + rid).remove();
}

function room_fields5() {

    room++;
    var objTo = document.getElementById('room_fields5');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del trabajo </label><input type="text" formControlName="trabajosPublicadosNombre" id="trabajosPublicadosNombre" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año de publicación</label><input type="text" formControlName="trabajosPublicadosAno" id="trabajosPublicadosAno" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Revista científica </label><input type="text" formControlName="trabajosPublicadosRevCient" id="trabajosPublicadosRevCient" class="form-control" ></div><div class=" col-12 col-md-6 camp" style="margin-bottom:20px"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="trabajosPublicadosPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields5(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';


    objTo.appendChild(divtest);
}

function remove_room_fields5(rid) {
    $('.removeclass' + rid).remove();
}

// Certificados

function room_fields01() {

    room++;
    var objTo = document.getElementById('room_fields01');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del evento </label><input type="text" name="cert_asist_avalados_nombre[]" #cert_asist_avalados_nombre="ngModel" [(ngModel)]="certificados[0].cert_asist_avalados_nombre" class="form-control"></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año </label><input type="text" name="cert_asist_avalados_ano[]" #cert_asist_avalados_ano="ngModel" [(ngModel)]="certificados[0].cert_asist_avalados_ano" class="form-control"></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Otras instituciones que lo avalan </label><input type="text" name="cert_asist_avalados_otrasinst[]" #cert_asist_avalados_otrasinst="ngModel" [(ngModel)]="certificados[0].cert_asist_avalados_otrasinst" class="form-control"></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Horas crédito </label><input type="text" name="cert_asist_avalados_horas[]" #cert_asist_avalados_horas="ngModel" [(ngModel)]="certificados[0].cert_asist_avalados_horas" class="form-control"></div><div class=" col-xs-12 col-sm-6 camp"><img src="assets/images/pdf-icon.png" alt=""><input type="file" name="cert_asist_avalados_pdf[]" (change)="avatarUpload($event)" /><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields01(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';
    //divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del evento </label><input type="text" name="cert_asist_avalados_nombre[]" #cert_asist_avalados_nombre="ngModel" [(ngModel)]="certificados.cert_asist_avalados_nombre" class="form-control"></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año </label><input type="text" name="cert_asist_avalados_ano[]" #cert_asist_avalados_ano="ngModel" [(ngModel)]="certificados.cert_asist_avalados_ano" class="form-control"></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Otras instituciones que lo avalan </label><input type="text" name="cert_asist_avalados_otrasinst[]" #cert_asist_avalados_otrasinst="ngModel" [(ngModel)]="certificados.cert_asist_avalados_otrasinst" class="form-control"></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Horas crédito </label><input type="text" name="cert_asist_avalados_horas[]" #cert_asist_avalados_horas="ngModel" [(ngModel)]="certificados.cert_asist_avalados_horas" class="form-control"></div><div class=" col-xs-12 col-sm-6 camp"><img src="assets/images/pdf-icon.png" alt=""><input type="file" name="cert_asist_avalados_pdf[]" (change)="avatarUpload($event)" /><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields01(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';


    objTo.appendChild(divtest);
}

function remove_room_fields01(rid) {
    $('.removeclass' + rid).remove();
}

function room_fields02() {

    room++;
    var objTo = document.getElementById('room_fields02');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del evento </label><input type="text" name="cert_asist_no_avalados_nombre[]" #cert_asist_no_avalados_nombre="ngModel" [(ngModel)]="certificados[0].cert_asist_no_avalados_nombre" class="form-control"></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año </label><input type="text" name="cert_asist_no_avalados_ano[]" #cert_asist_no_avalados_ano="ngModel" [(ngModel)]="certificados[0].cert_asist_no_avalados_ano" class="form-control"></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Otras instituciones que lo avalan </label><input type="text" name="cert_asist_no_avalados_otrasinst[]" #cert_asist_no_avalados_otrasinst="ngModel" [(ngModel)]="certificados[0].cert_asist_no_avalados_otrasinst" class="form-control"></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Horas crédito </label><input type="text" name="cert_asist_no_avalados_horas[]" #cert_asist_no_avalados_horas="ngModel" [(ngModel)]="certificados.cert_asist_no_avalados_horas" class="form-control"></div><div class=" col-xs-12 col-sm-6 camp"><img src="assets/images/pdf-icon.png" alt=""><input type="file" name="cert_asist_no_avalados_pdf[]" #cert_asist_no_avalados_pdf="ngModel" [(ngModel)]="certificados[0].cert_asist_no_avalados_pdf" (change)="avatarUpload($event)" /><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields02(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';
    //divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del evento </label><input type="text" name="cert_asist_no_avalados_nombre[]" #cert_asist_no_avalados_nombre="ngModel" [(ngModel)]="certificados.cert_asist_no_avalados_nombre" class="form-control"></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año </label><input type="text" name="cert_asist_no_avalados_ano[]" #cert_asist_no_avalados_ano="ngModel" [(ngModel)]="certificados.cert_asist_no_avalados_ano" class="form-control"></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Otras instituciones que lo avalan </label><input type="text" name="cert_asist_no_avalados_otrasinst[]" #cert_asist_no_avalados_otrasinst="ngModel" [(ngModel)]="certificados.cert_asist_no_avalados_otrasinst" class="form-control"></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Horas crédito </label><input type="text" name="cert_asist_no_avalados_horas[]" #cert_asist_no_avalados_horas="ngModel" [(ngModel)]="certificados.cert_asist_no_avalados_horas" class="form-control"></div><div class=" col-xs-12 col-sm-6 camp"><img src="assets/images/pdf-icon.png" alt=""><input type="file" name="cert_asist_no_avalados_pdf[]" #cert_asist_no_avalados_pdf="ngModel" [(ngModel)]="certificados.cert_asist_no_avalados_pdf" (change)="avatarUpload($event)" /><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields02(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';


    objTo.appendChild(divtest);
}

function remove_room_fields02(rid) {
    $('.removeclass' + rid).remove();
}

// Recertificacion

// Certificados


function room_fields001() {

    room++;
    var objTo = document.getElementById('room_fields001');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del trabajo </label><input type="text" formControlName="cursoAno" id="cursoAno" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año del trabajo </label><input type="text" formControlName="cursoAvaluo" id="cursoAvaluo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Revista científica </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Institución que lo avala</label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>En calidad de</label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class=" col-xs-12 col-sm-6 camp"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="eventoPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields001(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';
    //divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del trabajo </label><input type="text" formControlName="cursoAno" id="cursoAno" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año del trabajo </label><input type="text" formControlName="cursoAvaluo" id="cursoAvaluo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Revista científica </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class=" col-xs-12 col-sm-6 camp"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="eventoPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields4(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';


    objTo.appendChild(divtest);
}

function remove_room_fields001(rid) {
    $('.removeclass' + rid).remove();
}

function room_fields002() {

    room++;
    var objTo = document.getElementById('room_fields002');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del trabajo </label><input type="text" formControlName="cursoAno" id="cursoAno" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año del trabajo </label><input type="text" formControlName="cursoAvaluo" id="cursoAvaluo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Revista científica </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class=" col-xs-12 col-sm-6 camp"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="eventoPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields002(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';
    // divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Título de la conferencia  </label><input type="text" formControlName="conferenciaSAvalTitulo" id="conferenciaSAvalTitulo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Evento en el que fue presentado  </label><input type="text" formControlName="conferenciaSAvalEvento" id="conferenciaSAvalEvento" class="form-control" ></div><div class=" col-12  camp " style="margin-bottom:20px"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="conferenciaSAvalPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields4(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';


    objTo.appendChild(divtest);
}

function remove_room_fields002(rid) {
    $('.removeclass' + rid).remove();
}

function room_fields003() {

    room++;
    var objTo = document.getElementById('room_fields003');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = ' <div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del evento </label><input type="text" formControlName="cursoAno" id="cursoAno" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Modalidad </label><input type="text" formControlName="cursoAvaluo" id="cursoAvaluo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Institucion que lo avala </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Horas crédito </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>En calidad de </label><input type="text" formControlName="calidad" id="calidad" class="form-control" ></div><div class=" col-xs-12 col-sm-6 camp"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="eventoPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields003(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';
    //divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del evento </label><input type="text" formControlName="cursoAno" id="cursoAno" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Modalidad </label><input type="text" formControlName="cursoAvaluo" id="cursoAvaluo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Institucion que lo avala </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Horas crédito </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class=" col-xs-12 col-sm-6 camp"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="eventoPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields4(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';


    objTo.appendChild(divtest);
}

function remove_room_fields003(rid) {
    $('.removeclass' + rid).remove();
}

function room_fields004() {

    room++;
    var objTo = document.getElementById('room_fields004');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del evento </label><input type="text" formControlName="cursoAno" id="cursoAno" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Modalidad </label><input type="text" formControlName="cursoAvaluo" id="cursoAvaluo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Institucion que lo avala </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Horas crédito </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>En calidad de </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class=" col-xs-12  col-sm-6 camp"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="eventoPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields004(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';
    //divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre del evento </label><input type="text" formControlName="cursoAno" id="cursoAno" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Modalidad </label><input type="text" formControlName="cursoAvaluo" id="cursoAvaluo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Institucion que lo avala </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Horas crédito </label><input type="text" formControlName="cursoHoras" id="cursoHoras" class="form-control" ></div><div class=" col-xs-12  col-sm-6 camp"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="eventoPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields4(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div><br><br></div>';


    objTo.appendChild(divtest);
}

function remove_room_fields004(rid) {
    $('.removeclass' + rid).remove();
}


// Recertificacion

// Conferencias

function room_fields101() {

    room++;
    var objTo = document.getElementById('room_fields101');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Título de la conferencia  </label><input type="text" formControlName="conferenciaSAvalTitulo" id="conferenciaSAvalTitulo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Evento en el que fue presentado  </label><input type="text" formControlName="conferenciaSAvalEvento" id="conferenciaSAvalEvento" class="form-control" ></div><div class=" col-12  camp" style="margin-bottom:20px"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="conferenciaSAvalPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields101(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div></div>';


    objTo.appendChild(divtest);
}

function remove_room_fields101(rid) {
    $('.removeclass' + rid).remove();
}


function room_fields102() {

    room++;
    var objTo = document.getElementById('room_fields102');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Título de la conferencia  </label><input type="text" formControlName="conferenciaSAvalTitulo" id="conferenciaSAvalTitulo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Evento en el que fue presentado  </label><input type="text" formControlName="conferenciaSAvalEvento" id="conferenciaSAvalEvento" class="form-control" ></div><div class=" col-12  camp" style="margin-bottom:20px"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="conferenciaSAvalPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields102(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div></div>';


    objTo.appendChild(divtest);
}

function remove_room_fields102(rid) {
    $('.removeclass' + rid).remove();
}


function room_fields103() {

    room++;
    var objTo = document.getElementById('room_fields103');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Trabajos presentados  </label><input type="text" formControlName="trabajoCAvalTitulo" id="trabajoCAvalTitulo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Evento en el que fue presentado  </label><input type="text" formControlName="trabajoCAvalEvento" id="trabajoCAvalEvento" class="form-control" ></div><div class="form-group camp col-12 col-sm-6"><label>Modalidad (presentación oral o poster) </label><select class="form-control form-control-line" formControlName="trabajoCAvalModalidad" id="trabajoCAvalModalidad"><optgroup label="Modalidad"><option value="">Seleccione</option><option value="oral">Oral</option><option value="poster">Poster</option></optgroup></select></div><div class=" col-12 col-md-6 camp" style="margin-bottom:20px"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="trabajoCAvalTituloPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields103(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div></div>';

    objTo.appendChild(divtest);
}

function remove_room_fields103(rid) {
    $('.removeclass' + rid).remove();
}


function room_fields104() {

    room++;
    var objTo = document.getElementById('room_fields104');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Título del trabajo </label><input type="text" formControlName="trabajoSAvalTitulo" id="trabajoSAvalTitulo" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Evento en el que fue presentado </label><input type="text" formControlName="trabajoSAvalEvento" id="trabajoSAvalEvento" class="form-control" ></div><div class="form-group camp col-12 col-sm-6"><label>Modalidad (presentación oral o poster) </label><select class="form-control form-control-line" formControlName="trabajoSAvalModalidad" id="trabajoCAvalModalidad"><optgroup label="Modalidad"><option value="">Seleccione</option><option value="oral">Oral</option><option value="poster">Poster</option></optgroup></select></div><div class=" col-12 col-md-6 camp" style="margin-bottom:20px"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="trabajoSAvalTituloPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields104(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div></div>';

    objTo.appendChild(divtest);
}

function remove_room_fields104(rid) {
    $('.removeclass' + rid).remove();
}


function room_fields105() {

    room++;
    var objTo = document.getElementById('room_fields105');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Nombre de la asociación </label><input type="text" formControlName="trabajosPublicadosNombre" id="trabajosPublicadosNombre" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Cargo desempeñado</label><input type="text" formControlName="trabajosPublicadosAno" id="trabajosPublicadosAno" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Categoría </label><input type="text" formControlName="trabajosPublicadosRevCient" id="trabajosPublicadosRevCient" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Gremio </label><input type="text" formControlName="trabajosPublicadosRevCient" id="trabajosPublicadosRevCient" class="form-control" ></div><div class=" col-12 col-md-6 camp" style="margin-bottom:20px"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="trabajosPublicadosPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields105(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div></div></div>';

    objTo.appendChild(divtest);
}

function remove_room_fields105(rid) {
    $('.removeclass' + rid).remove();
}

function room_fields106() {

    room++;
    var objTo = document.getElementById('room_fields106');
    var divtest = document.createElement("div");
    divtest.setAttribute("class", "row form-group removeclass" + room);
    var rdiv = 'removeclass' + room;
    divtest.innerHTML = '<div class="form-group camp col-xs-12 col-sm-6 "><label>Figura </label><input type="text" formControlName="trabajosPublicadosNombre" id="trabajosPublicadosNombre" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Año</label><input type="text" formControlName="trabajosPublicadosAno" id="trabajosPublicadosAno" class="form-control" ></div><div class="form-group camp col-xs-12 col-sm-6 "><label>Función ejecutada </label><input type="text" formControlName="trabajosPublicadosRevCient" id="trabajosPublicadosRevCient" class="form-control" ></div><div class=" col-12 col-md-6 camp" style="margin-bottom:20px"><img src="assets/images/pdf-icon.png" alt=""><input type="file" id="trabajosPublicadosPdf" (change)="onSelectedFile($event)" /><div [innerHTML]="uploadError" class="error"></div><div class="input-group-btn col-xs-12"><button class="btn btn-danger" type="button" onclick="remove_room_fields106(' + room + ');"> <span class="fa fa-minus" aria-hidden="true"></span> </button></div></div>';

    objTo.appendChild(divtest);
}

function remove_room_fields106(rid) {
    $('.removeclass' + rid).remove();
}