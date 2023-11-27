declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.ogg' {
  const value: any;
  export default value;
}

declare module '*.scss';
declare module '*.sass';
declare module '*.css';

/**
 * This is absolute values that will never
 * going to be undefined unless they are
 * has been remove from webpack config
 * */
declare const process: {
  readonly env: {
    APP_VERSION: string;
    NODE_ENV: 'development' | 'production';
    APP_NAME: string;
    APP_SHORT_NAME: string;
    APP_DESCRIPTION: string;
    APP_HOMEPAGE: string;
    APP_REPOSITORY: string;
    AUTHOR: string;
    PROJECT_NAME: string;
    BUILD_DATE: string;
    [key: string]: string | undefined;
  };
};
