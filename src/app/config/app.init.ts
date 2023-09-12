import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () =>
        keycloak.init({
        config: {
          url: 'http://10.10.1.187:8080',
          realm: 'caisff-bi',
          clientId: 'caisff-bi-client-id'
        },
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
            window.location.origin + '/assets/silent-check-sso.html',
            checkLoginIframe: false
        },
        bearerExcludedUrls: ["http://10.10.1.187:8080"],
        loadUserProfileAtStartUp: true,
        //enableBearerInterceptor: true
      });
  }