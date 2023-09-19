"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  //server side rendering, modals can cause hydration errors
  //never want to render a modal if we are in server side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  //we know if what we're rendering is in server side with this if statement

  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
