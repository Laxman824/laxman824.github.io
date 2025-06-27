import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --content-padding: 40px;
    --section-spacing: 80px;
    --component-spacing: 40px;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    overflow-x: hidden;
    width: 100%;
    font-size: 16px;
    line-height: 1.6;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px var(--content-padding) var(--content-padding);
  }

  section {
    margin-bottom: var(--section-spacing);
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--content-padding);
  }

  .grid {
    display: grid;
    gap: var(--component-spacing);
  }

  @media (max-width: 1200px) {
    :root {
      --content-padding: 30px;
      --section-spacing: 60px;
      --component-spacing: 30px;
    }
  }

  @media (max-width: 768px) {
    :root {
      --content-padding: 20px;
      --section-spacing: 40px;
      --component-spacing: 20px;
    }

    body {
      font-size: 14px;
    }

    main {
      padding-top: 60px;
    }
  }
`;
