import { useEffect, useRef, useState } from 'react';

export interface TouchHandlerOptions {
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
  holdDuration?: number;
}

export const useMobileTouchHandlers = (options: TouchHandlerOptions = {}) => {
  const { onTouchStart, onTouchEnd, holdDuration = 0 } = options;
  const [isPressed, setIsPressed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsPressed(true);
    
    if (holdDuration > 0) {
      timeoutRef.current = setTimeout(() => {
        onTouchStart?.();
      }, holdDuration);
    } else {
      onTouchStart?.();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsPressed(false);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    onTouchEnd?.();
  };

  const handleTouchCancel = () => {
    setIsPressed(false);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    isPressed,
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchCancel: handleTouchCancel,
      onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
    },
  };
};

export const applyMobileTouchClass = () => {
  if (typeof window !== 'undefined') {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    if (isMobile) {
      document.documentElement.classList.add('touch-device');
    }
  }
};