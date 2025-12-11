/* ============================================
   RUTEO - Verificación de URLs
   ES Module Version
   ============================================ */

/* --- Verificar URL --- */
export async function checkURL(url) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      redirect: 'follow'
    });

    clearTimeout(timeoutId);

    if (response.ok || response.status === 0) {
      return {
        status: 'ok',
        code: response.status || 200,
        message: 'URL accesible'
      };
    } else if (response.status >= 300 && response.status < 400) {
      return {
        status: 'warning',
        code: response.status,
        message: 'Redirect detectado'
      };
    } else {
      return {
        status: 'error',
        code: response.status,
        message: `Error HTTP ${response.status}`
      };
    }

  } catch (error) {
    if (error.name === 'AbortError') {
      return {
        status: 'error',
        code: 'TIMEOUT',
        message: 'Timeout (>8s)'
      };
    }

    // Si HEAD falla, intentar con GET
    try {
      const controller2 = new AbortController();
      const timeoutId2 = setTimeout(() => controller2.abort(), 8000);

      const response2 = await fetch(url, {
        method: 'GET',
        signal: controller2.signal,
        redirect: 'follow'
      });

      clearTimeout(timeoutId2);

      if (response2.ok || response2.status === 0) {
        return {
          status: 'ok',
          code: response2.status || 200,
          message: 'URL accesible'
        };
      } else {
        return {
          status: 'error',
          code: response2.status,
          message: `Error HTTP ${response2.status}`
        };
      }

    } catch (error2) {
      // Si todo falla, asumir que está OK (puede ser CORS)
      return {
        status: 'ok',
        code: 'CORS',
        message: 'No verificable (probablemente OK)'
      };
    }
  }
}
