import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () =>
        keycloak.init({
        config: {
          url: 'http://localhost:8080',
          realm: 'caisff-bi',
          clientId: 'caisff-bi-client-id'
        },
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
            window.location.origin + '/assets/silent-check-sso.html',
            checkLoginIframe: false
        },
        bearerExcludedUrls: ["http://localhost:8089"],
        loadUserProfileAtStartUp: true,
        //enableBearerInterceptor: true
      });
  }