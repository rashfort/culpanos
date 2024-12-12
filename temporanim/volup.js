if ((da0 -= p0 * 2) > epsilon$3) 
    p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
else 
    da0 = 0, a00 = a10 = (a0 + a1) / 2;
