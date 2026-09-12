import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in React Component:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {
      // ignore
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-4 text-center">
            <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              !
            </div>
            <h1 className="text-xl font-bold text-white">เกิดข้อผิดพลาดในการโหลดระบบ</h1>
            <p className="text-sm text-slate-300">
              พบปัญหาขณะประมวลผลข้อมูลในเบราว์เซอร์ กรุณาลองรีเฟรชหน้าเว็บ หรือล้างข้อมูลแคชชั่วคราว
            </p>
            {this.state.error && (
              <div className="bg-slate-950 p-3 rounded-lg text-left text-xs font-mono text-red-300 overflow-x-auto max-h-36 border border-slate-800">
                {this.state.error.toString()}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition"
              >
                รีเฟรชหน้าเว็บ
              </button>
              <button
                onClick={this.handleReset}
                className="px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-semibold transition"
              >
                ล้างแคชข้อมูล & เริ่มใหม่
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
