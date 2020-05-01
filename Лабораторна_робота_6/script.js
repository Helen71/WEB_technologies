(function(a, b, c, d, e, f, g) 
{
    a['AnalyticsObject'] = e;
    a[e] = a[e] || function() {
        (a[e].d = a[e].d || []).push(arguments)
    }, a[e].l = 1 * new Date();
    f = b.createElement(c),
        g = b.getElementsByTagName(c)[0];
    f.async = 1;
    f.src = d;
    g.parentNode.insertBefore(f, g)
}
)