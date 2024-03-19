import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import CopyToClipboard from "react-copy-to-clipboard";

export const Paragraf = ({ children }) => (
    <p className="pt-2 pb-2">
        {children}
    </p>
);

export const H1 = ({ children }) => (
    <h1 className="text-4xl font-medium mb-2">
        {children}
    </h1>
);

export const H2 = ({ children }) => (
    <h2 className="text-3xl font-medium my-2">
        {children}
    </h2>
);

export const H3 = ({ children }) => (
    <h3 className="text-2xl font-medium my-2">
        {children}
    </h3>
);

export const H4 = ({ children }) => (
    <h4 className="text-xl font-medium my-2">
        {children}
    </h4>
);

export const H5 = ({ children }) => (
    <h5 className="text-xl font-medium my-2">
        {children}
    </h5>
);

export const H6 = ({ children }) => (
    <h6 className="text-xl font-medium my-2">
        {children}
    </h6>
);

export const NumberedList = ({ children }) => (
    <ol className="list-decimal pl-12">
        {children}
    </ol>
);

export const DiscList = ({ children }) => (
    <ul className="list-disc pl-12">
        {children}
    </ul>
);

export const MyBlockquote = ({ children }) => 
    <blockquote className="text-lg italic m-8 p-8 rounded-md border-solid border-l-4 border-primary">
        {children}
    </blockquote>

export const MyPRE = (props) => {
    const className = props.children.props.className || "";
    const matches = className.match(/language-(?<lang>.*)/);
    
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };
    return (
      <Highlight
        theme={themes.gruvboxMaterialDark }
        code={props.children.props.children.trim()}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className={"m-4 bg-slate-700 overflow-x-auto rounded-md"}>
            <div className="flex flex-row">
              <div className="flex-none bg-yellow-300 p-2 text-xs">
                {matches && matches.groups && matches.groups.lang
                  ? matches.groups.lang
                  : ""}
              </div>
              <div className="flex-auto bg-slate-700 p-1 text-right text-xs">
                <CopyToClipboard
                  className="bg-slate-700 mt-1"
                  text={props.children.props.children.trim()}
                  onCopy={handleCopy}
                >
                  <button>
                    {copied ? (
                      <span className="text-white">Copied!</span>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                        />
                      </svg>
                    )}
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <pre className="p-4 bg-slate-800" style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    );
  };   