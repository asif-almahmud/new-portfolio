// import {
//     useState,
//     createContext,
//     useContext,
//     ReactNode,
//     useEffect,
//   } from "react";
//   import { ShoppingCart } from "../components/ShoppingCart";
//   import { localValues } from "../utilities/localValues";

//   type ShoppingCartProviderProps = {
//     children: ReactNode;
//   };

//   type Id = number | string;

//   export type CartItem = {
//     id: Id;
//     name: string;
//     price: number;
//     formattedPrice: string;
//     imgUrl: string;
//     quantity: number;
//   };

//   type ShoppingCartContext = {
//     cartItems: CartItem[];
//     cartQuantity: number;
//     findItemQuantity: (id: Id) => number;
//     addToCart: (item: CartItem) => void;
//     increaseCartQuantity: (id: Id) => void;
//     decreaseCartQuantity: (id: Id) => void;
//     removeFromCart: (id: Id) => void;
//     resetCart: (id: Id) => void;
//     cartIsShown: boolean;
//     showCart: () => void;
//   };

//   const ShoppingCartContext = createContext({} as ShoppingCartContext);

//   export function useShoppingCart() {
//     return useContext(ShoppingCartContext);
//   }

//   export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
//     const [cartItems, setCartItems] = useState<CartItem[]>([]);
//     const [cartIsShown, setCartIsShown] = useState<boolean>(false);

//     const cartQuantity = cartItems.reduce(
//       (quantity, item) => quantity + item.quantity,
//       0
//     );

//     function findItemQuantity(id: Id) {
//       return cartItems.find((item) => item.id === id)?.quantity || 0;
//     }

//     function addToCart(item: CartItem) {
//       setCartItems((prevItems) => [...prevItems, item]);
//     }

//     function increaseCartQuantity(id: Id) {
//       setCartItems((prevItems) => {
//         return prevItems.map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       });
//     }

//     function decreaseCartQuantity(id: Id) {
//       setCartItems((prevItems) => {
//         if (prevItems.find((item) => item.id === id)?.quantity === 1) {
//           return prevItems.filter((item) => item.id !== id);
//         } else {
//           return prevItems.map((item) =>
//             item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//           );
//         }
//       });
//     }

//     function removeFromCart(id: Id) {
//       setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     }

//     function resetCart(id: Id) {
//       setCartItems([]);
//     }

//     function showCart() {
//       setCartIsShown((prev) => !prev);
//     }

//     useEffect(() => {
//       if (localValues.get("cartItems")) {
//         setCartItems(localValues.get("cartItems"));
//       }
//     }, []);

//     useEffect(() => {
//       if (cartQuantity > 0) {
//         localValues.set("cartItems", cartItems);
//       } else {
//         localValues.remove("cartItems");
//       }
//     }, [cartQuantity]);

//     return (
//       <ShoppingCartContext.Provider
//         value={{
//           cartItems,
//           cartQuantity,
//           findItemQuantity,
//           addToCart,
//           increaseCartQuantity,
//           decreaseCartQuantity,
//           removeFromCart,
//           resetCart,
//           cartIsShown,
//           showCart,
//         }}
//       >
//         {children}
//         <ShoppingCart />
//       </ShoppingCartContext.Provider>
//     );
//   }

import { createContext, ReactNode, useContext, useState } from "react";

const initialValues = { navOption: "home", setNavOption: () => {} } as {
  navOption: string;
  setNavOption: React.Dispatch<React.SetStateAction<string>>;
};

const NavigationContext = createContext(initialValues);

export function useNavigationIndicator() {
  return useContext(NavigationContext);
}

export function NavigationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [navOption, setNavOption] = useState("home");

  return (
    <NavigationContext.Provider value={{ navOption, setNavOption }}>
      {children}
    </NavigationContext.Provider>
  );
}
