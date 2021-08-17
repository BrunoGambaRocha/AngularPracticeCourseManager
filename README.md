# AngularPractiseCourseManager
Angular 8 - Practice of Course Introduction to Angular 8 - Instrutor Weslley Holanda

Angular 8 / TypeScript / Node.js / Json / Material Design / Bootstrap / Font-Awesome

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.


## Parte 5
- formulários e variáveis de template
    - criado o método `retrieveById` em `CourseService`
    - alterando o arquivo `course-info.component.html` com o formulário `<form #courseForm="ngForm" *ngIf="course" ...`
    - validação dos campos e adicionando class aos elementos dinamicamente
    - campos requeridos e tipos de valores esperados
    - evento de botões, desabilitando botão 
    - validação do formulário ao enviar


## Parte 4
- adicionada as classes components `app-nav-bar` e `error404Component`
- rotas pelo `RouterModule`
    - não se usa tag `selector:` no component alvo quando se está utilizando rotas
    - no modules.ts, adicionar ao @NgModule, imports RouterModule, que espera recebeu um array de rotas
        - rotas nativas, ex: `path:''` para raiz e `path:'**'` para Error404
        - rotas personalizadas, ex: `path: 'destino', component: DestinoComponent`
        - informar o destino da rota com `<router-outlet></router-outlet>`
- rotas pelo `[routerLink]`
    - ex: atribuir o alvo com routerLink com os argumentos num array `<a [routerLink]="['/destino/destino_sub', objeto.id]" ...`
            - criar o componente para ser alvo dos links, declarar em `declarations` no module.ts
            - ainda no module.ts, em `RouterModule`, passar o path com o alvo e o id, `path: 'destino/destino_sub/:id', component: DestinoComponent`
            - na class alvo do link, `implements OnInit`, e a Injeção de dependência na class `constructor(private activatedRoute: ActivatedRoute) { }`
            - atribuindo uma class de estilo para o link ativo: `routerLinkActivate="activeExemplo"`


## Parte 3
- Injeção de Dependência: 
    - `@Injectable` e `providedIn: 'root'` para criar a injeção
    - `constructor(private courseService: CourseService) { };` onde deseja obter o mesmo objeto
- não é uma boa prática, nas classes de serviços utilizar variáveis que possam ser modificadas pelos metodos dela, utilizar variaveis estaticas que nao serão alteradas entre os metodos.
- implementação do filtro da lista utilizando elemento two-way data binding
- pipe - altera a forma de como a propriedade é exibida no template
    - ex. nativos  `| date: 'dd/MM/yyyy'` e `| lowercase`
    - personalizar um próprio pipe: 
        - criar: `@Pipe({ name: 'nomeDoPipe' })`, `implements PipeTransform`, `import { Pipe, PipeTransform } from '@angular/core';`
        - usar: `| nomeDoPipe: '-': ' '` e declarar a class do Pipe no module.ts correspondente


## Parte 2
- diferença entre os atributos `template` e `templateUrl` do @Component
- adicionar tag do component ao html -> Ex: no arquivo da class do componente, dar nome ao atributo `selector: 'app-course-list'` e chamar com a tag `<app-course-list></app-course-list>` no ponto do html que desejar exibir o elemento
- instalar pacotes externos: `npm install bootstrap` e `npm install font-awesome`
- src / style.css: `@import '~bootstrap/dist/css/bootstrap.min.css';` `@import '~font-awesome/css/font-awesome.min.css';`
- stop dev server and Run `ng serve`
- criação de classe `Course` para representar um novo tipo
- criação de array vazio do novo tipo Course: `courses: Course[] = [];`
- implements `OnInit` e `ngOnInit(): void`
- estrutura de repetição de linhas: `<tr *ngFor="let course of courses"/>`
- importar imagens para a pasta `src/assets/images`
- passar parametro da variável para o atributo do elemento `<img [src]="course.imageUrl"`
- implements `OnChanges` e `ngOnChanges(): void`
- `@Input()` torna a variável elegível a receber informação de um componente externo
- atributo `styleUrls` do @Component recebe um array de folhas de estilos


## Parte 1
- interpolação -> Ex: {{variavel}}
- importar módulos
- components `@Component`
- One-way data binding -> Ex: <input [ngModel]="nameFirst" name="nameFirst" >
- Two-way data binding -> Ex: <input [(ngModel)]="nameLast" name="nameLast" >


## Angular Structure 
Presentation of the folder structure of an application's base project in Angular and important files
- package.json / angular.json
- src / index.html / main.ts / styles.css
- src / assets
- app / app.module.ts / app.component.ts / app.component.html / app.component.css / app.component.spec.ts


## Angular 8 - Base Project
- Create project `ng new NAME_PROJECT`

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.