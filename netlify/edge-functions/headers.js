export default async (request, context) => {
    const response = await context.next();

    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Content-Security-Policy', "default-src 'self';");
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set(
        'Permissions-Policy',
        'geolocation=(), microphone=(), camera=(), midi=(), payment=(), fullscreen=(), gyroscope=(), magnetometer=(), accelerometer=(), bluetooth=(), battery=(), usb=(), window-management=(), display-capture=(self), sync-xhr=()'
    );
    response.headers.set('Cross-Origin-Embedder-Policy', 'unsafe-none');
    response.headers.set('Cross-Origin-Opener-Policy', 'unsafe-none');
    response.headers.set('Cross-Origin-Resource-Policy', 'unsafe-none');

    return response;
};
