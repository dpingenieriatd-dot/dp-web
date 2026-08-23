"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { PRODUCTOS, type Producto } from "@/lib/portal-data";

type CartLine = Producto & { cantidad: number };

type PortalState = {
  proyectoSeleccionado: number;
  setProyectoSeleccionado: (index: number) => void;
  cart: Record<string, number>;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartLines: CartLine[];
  cartCount: number;
  subtotal: number;
  iva: number;
  total: number;
  pagando: boolean;
  checkout: () => void;
  aprobadas: Record<string, boolean>;
  aprobar: (id: string) => void;
};

const PortalContext = createContext<PortalState | null>(null);

export function PortalStateProvider({ children }: { children: React.ReactNode }) {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(0);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [pagando, setPagando] = useState(false);
  const [aprobadas, setAprobadas] = useState<Record<string, boolean>>({});

  const addToCart = (id: string) => {
    setPagando(false);
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const checkout = () => setPagando(true);
  const aprobar = (id: string) => setAprobadas((prev) => ({ ...prev, [id]: true }));

  const cartLines = useMemo<CartLine[]>(
    () =>
      Object.keys(cart).map((id) => {
        const producto = PRODUCTOS.find((p) => p.id === id)!;
        return { ...producto, cantidad: cart[id] };
      }),
    [cart]
  );

  const cartCount = cartLines.reduce((acc, l) => acc + l.cantidad, 0);
  const subtotal = cartLines.reduce((acc, l) => acc + l.valor * l.cantidad, 0);
  const iva = Math.round(subtotal * 0.19);
  const total = Math.round(subtotal * 1.19);

  const value: PortalState = {
    proyectoSeleccionado,
    setProyectoSeleccionado,
    cart,
    addToCart,
    removeFromCart,
    cartLines,
    cartCount,
    subtotal,
    iva,
    total,
    pagando,
    checkout,
    aprobadas,
    aprobar,
  };

  return <PortalContext.Provider value={value}>{children}</PortalContext.Provider>;
}

export function usePortalState() {
  const ctx = useContext(PortalContext);
  if (!ctx) throw new Error("usePortalState debe usarse dentro de PortalStateProvider");
  return ctx;
}
