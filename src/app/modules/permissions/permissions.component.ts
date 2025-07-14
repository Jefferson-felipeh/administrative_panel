import { Component } from "@angular/core";

@Component({
    selector: 'permissions-component',
    imports: [],
    templateUrl: './permissions.component.html',
    standalone: true
})
export class PermissionsComponent{}

/**
 * Eu irei reconstruir toda parte das regras do casbin dividindo em endpoints da API e endpoints da SPA.
 * Para isso, irei adicionar mais parametros a Policy_definition do model do casbin para se adequar com as regras da entidade.
 * Eu vou criar o parametro scope com valores API ou SPA.
 * Irei criar um quinto parametro para definir o contexto;
 * 
 * Irei definir a segurança do frontend com base no(AuthGuard, Resolver, Interceptor e ngIf) além das regras de security do próprio backend;
 * 
 * Há dois componentes que estão fazendo requisições para buscar dados que o próprio Home já possue, logo mudar essa estratégia.
 * È o componente Menus e o profile;
 * 
 */