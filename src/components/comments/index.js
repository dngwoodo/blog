import { useTheme } from '@emotion/react';
import React, { useEffect, useRef } from 'react';

const src = 'https://utteranc.es/client.js';
const branch = 'main';

function Comments({ repo, path }) {
  const { themeMode } = useTheme();
  const rootElm = useRef(false);
  const isUtterancesLoaded = useRef(false);

  useEffect(() => {
    if (!rootElm.current || isUtterancesLoaded.current) {
      document
        .querySelector('iframe.utterances-frame')
        .contentWindow
        .postMessage({ type: 'set-theme', theme: themeMode === 'light' ? 'github-light' : 'photon-dark' }, src);
      return;
    }

    const utterances = document.createElement('script');
    const utterancesConfig = {
      src,
      repo,
      branch,
      theme: themeMode === 'light' ? 'github-light' : 'photon-dark',
      label: '✨💬✨',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    };

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
    isUtterancesLoaded.current = true;
  }, [repo, rootElm, path, themeMode]);

  return <div className="utterances" ref={rootElm} />;
}

export default Comments;
