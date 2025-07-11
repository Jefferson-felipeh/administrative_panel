import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataForm } from "../../models/dataFormLogin";
import { Observable } from "rxjs";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  signIn(dataSignIn: DataForm): Observable<string> {
    if (!dataSignIn.email || !dataSignIn.password) throw new Error();

    const userAgent = navigator.userAgent;
    /**
     * O userAgent é basicamente uma identificação que o navegador envia para os sites que é acessado.
     * Ele descreve o tipo de dispositivo, sistema operacional, navegador e outras informações relevantes.
     * Ele não identifica diretamente a pessoa que esta usando e acessando.
     * Mas pode ajudra a traçar um perfil tecnico de acesso;
     * 
     * Ela indica:
     * Tipo de dispositivo;
     * Sistema operacional e versão;
     * Modelo do aparelho;
     * Navegador e versão;
     * Compatibilidade com recusrsos da web;
     * 
     * Ele pode ser usado, também, para:
     * Registrar informações do dispositivo;
     * Ajudar na auditpria de acessos;
     * Ou ate fazer detecção de comportamentos Incomuns(Por exmeplo, se o usuário sempre acessa de um dispositivo, 
     * e de repente acesa por outro, pode levantar suspeitas.);
     * 
     * Esse userAgent não serve como autenticação, mas pode complementarsistemas que monitoram padrões de acesso.
     * Também pode sre util em sistemas antifraude, bloquenaod login de dispositivos ou navegadores suspeitos.
     */
    //-----------------------------------------------------------------------------------------------------------
    
    /**
     * O withCredentials: true é uma configuração usada em requisições HTTP(como axios ou HttpClient) que permite o envio
     * de credenciais -  como cookies, cabeçalho de autenticação ou certificados TLS junto com a requisição, mesmo em 
     * chamadas entre dominios.
     * 
     * Quando eu defino um withCredentials = true na requisição, estou indicando:
     * Ei, mesmo que essa requisição vá para outro domínio, envie cookies e credenciais que estão
     * salvos para esse servidor. 
     * Quando eu uso ele, ele envia automaticamente esses cookies e credenciais nas requisições para o back.
     * 
     * Para que usar:
     * -> Autenticação baseada em cookies: se o back usa cookies para manter sessões(como Set-cookie com HttpOnly),
     * o front precisa enviar esses cookies nas requisições.
     * -> Sessões persistentes: Permite que o servidor reconheça o usuário sem precisar enviar token manualmente.
     * -> Integração segura entre front e back: Especialmente útil quando o front esta com um endereço diferente do back.
    */

    //-----------------------------------------------------------------------------------------------------------

    //Como o HttpClient retorna uma observabel, eu preciso me inscrever nessa observabel_
    return this.http.post('http://localhost:3031/auth/login', dataSignIn,{ responseType: 'text', withCredentials: true });
    //Esse trecho garante que, se o backend responder com um cookie de sessão, ele será armazenado e enviado automaticamente
    //nas próximas requisições,mantendo o usuário autenticado.
    //Ou seja, o withCredentials = true permite que o navegador envie os cookies de sessão pro backend e eu consigo acessar
    //esses cookies no backend usando o @Req() nos endpoints.
    //Portanto, withCredentials = true: Passa os cookies do navegador automaticamente em toda requisição que usa-lo.

    //OBS: O withCredentials 

  }
}

/*
    FLUXO DO SPA_
    
    Login do usuário > 

    SPA(login.component:login(passa as credenciais, email e password, e chama o account.service passando essas credenciais) > 

    account.service:login)(Faz a requisição Post para o back passando as credencias(email e password), o userAgent e o withCredentials(cookies)) > 

    API(auth.controller:login(recebe a requisição de login, extrai algumas informações do body, req e do res e passa para o auth.service) > 

    auth.service:login(recebe as informações passadas pelo controller, valida as credenciais do usuário, valida as senhas 
        cria os tokens de autorização, criar a sessão, faz uma chamada para o método que retorna as permissões desse usuário com base no seu id
        e retorna esse objeto para o controller:
        return {
          token: accessToken,
          refreshToken,
          user,
          permissions,
        };
    )) >

    auth.controlle:login(recebe o retorno do auth.service e chama esse método passando o token e o res: 
      this.setAuthCookies(res, newAccessToken, newRefreshToken); que esta dentro do próprio auth.controller
    ) e por fim o próprio método login do auth.controller retorna para o front esse objeto: 
     return { user , permissions };
*/