import React, { useRef, useState, useEffect, cloneElement } from 'react';
import type { ReactElement } from 'react';

interface TouchInteractiveProps {
  children: ReactElement;
  className?: string;
  activeClassName?: string;
  onTouch?: () => void;
  onRelease?: () => void;
  holdDuration?: number;
}

const TouchInteractive: React.FC<TouchInteractiveProps> = ({
  children,
  className,
  activeClassName = 'touch-active',
  onTouch,
  onRelease,
  holdDuration = 0,
}) => {
  const [isActive, setIsActive] = useState(false);
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isTouchDevice.current) return;
    
    e.preventDefault();
    setIsActive(true);

    if (holdDuration > 0) {
      touchTimeoutRef.current = setTimeout(() => {
        onTouch?.();
      }, holdDuration);
    } else {
      onTouch?.();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isTouchDevice.current) return;
    
    e.preventDefault();
    setIsActive(false);

    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = null;
    }

    onRelease?.();
  };

  const handleTouchCancel = () => {
    setIsActive(false);

    if (touchTimeoutRef.current) {
      clearTimeout(touchTimeoutRef.current);
      touchTimeoutRef.current = null;
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    if (isTouchDevice.current) {
      e.preventDefault();
    }
  };

  const childProps = {
    ...(children.props as Record<string, unknown>),
    className: `${(children.props as { className?: string }).className || ''} ${className || ''} ${isActive ? activeClassName : ''}`.trim(),
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchCancel,
    onContextMenu: handleContextMenu,
    'data-touch-interactive': 'true',
  };

  return cloneElement(children, childProps);
};

export default TouchInteractive;