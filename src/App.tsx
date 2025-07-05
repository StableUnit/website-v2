import { useEffect, lazy, Suspense, Component, useState, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import './App.css';
import { initializeMobileTouchHandlers } from './utils/initializeMobileTouchHandlers.ts';
import Header from '@components/Header/Header.tsx';
import Hero from '@components/Hero/Hero.tsx';
import Footer from '@components/Footer/Footer.tsx';
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner.tsx';

const LendingSection = lazy(() => 
  Promise.all([
    import('@components/LendingSection/LendingSection.tsx'),
    new Promise(resolve => setTimeout(resolve, 100))
  ]).then(([moduleExports]) => moduleExports)
);

const LendingProtocol = lazy(() => 
  Promise.all([
    import('@components/LendingProtocol/LendingProtocol.tsx'),
    new Promise(resolve => setTimeout(resolve, 150))
  ]).then(([moduleExports]) => moduleExports)
);

const MarketStatistics = lazy(() => 
  Promise.all([
    import('@components/MarketStatistics/MarketStatistics.tsx'),
    new Promise(resolve => setTimeout(resolve, 200))
  ]).then(([moduleExports]) => moduleExports)
);

const HandCards = lazy(() => 
  Promise.all([
    import('@components/HandCards/HandCards.tsx'),
    new Promise(resolve => setTimeout(resolve, 250))
  ]).then(([moduleExports]) => moduleExports)
);

const SecurityAudit = lazy(() => 
  Promise.all([
    import('@components/SecurityAudit/SecurityAudit.tsx'),
    new Promise(resolve => setTimeout(resolve, 300))
  ]).then(([moduleExports]) => moduleExports)
);

const Tokenomics = lazy(() => 
  Promise.all([
    import('@components/Tokenomics/Tokenomics.tsx'),
    new Promise(resolve => setTimeout(resolve, 350))
  ]).then(([moduleExports]) => moduleExports)
);

const FAQ = lazy(() => 
  Promise.all([
    import('@components/FAQ/FAQ.tsx'),
    new Promise(resolve => setTimeout(resolve, 400))
  ]).then(([moduleExports]) => moduleExports)
);

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<{children: ReactNode}, ErrorBoundaryState> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch() {
    // In production, send error to monitoring service
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      // Send to error tracking service (e.g., Sentry, LogRocket, etc.)
      // Example: errorTrackingService.logError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Something went wrong loading components.</h2>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [, setComponentsLoaded] = useState(0);
  const totalComponents = 7;
  const allComponentsLoadedRef = useRef(false);

  useEffect(() => {
    const cleanup = initializeMobileTouchHandlers();
    return cleanup;
  }, []);

  const onComponentLoad = useCallback(() => {
    setComponentsLoaded(prev => {
      const newCount = prev + 1;
      if (newCount === totalComponents && !allComponentsLoadedRef.current) {
        allComponentsLoadedRef.current = true;
        setTimeout(() => {
          const loader = document.getElementById('initial-loader');
          const root = document.getElementById('root');
          const body = document.body;
          
          if (loader && root) {
            loader.classList.add('fade-out');
            root.classList.add('loaded');
            
            body.classList.remove('loading');
            
            setTimeout(() => {
              loader.remove();
            }, 500);
          }
        }, 300);
      }
      return newCount;
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <ComponentWrapper onLoad={onComponentLoad}>
            <LendingSection />
          </ComponentWrapper>
          <ComponentWrapper onLoad={onComponentLoad}>
            <LendingProtocol />
          </ComponentWrapper>
          <ComponentWrapper onLoad={onComponentLoad}>
            <HandCards />
          </ComponentWrapper>
          <ComponentWrapper onLoad={onComponentLoad}>
            <MarketStatistics />
          </ComponentWrapper>
          <ComponentWrapper onLoad={onComponentLoad}>
            <SecurityAudit />
          </ComponentWrapper>
          <ComponentWrapper onLoad={onComponentLoad}>
            <Tokenomics />
          </ComponentWrapper>
          <ComponentWrapper onLoad={onComponentLoad}>
            <FAQ />
          </ComponentWrapper>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

function ComponentWrapper({ children, onLoad }: { children: ReactNode; onLoad: () => void }) {
  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return <>{children}</>;
}

export default App
