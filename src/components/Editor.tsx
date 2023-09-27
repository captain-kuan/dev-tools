import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import JsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import TSWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import CssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import HtmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";

/**
 * 编辑器组件
 * @returns
 */
function Editor(config: {
    value:string,
    onChange:(v:string)=>void,
    options: Partial<monaco.editor.IStandaloneEditorConstructionOptions>;
}) {
  const editor_ref = useRef<HTMLDivElement>(null);

  // 编辑器的选项
  const default_editor_option = {
    automaticLayout: true, // 自适应布局
    scrollBeyondLastLine: false, // 取消代码后面空白
    fixedOverflowWidgets: true, // 超出编辑器大小的使用fixed属性显示
    theme: "vs-dark",
    language: "javascript",
    minimap: {
      enabled: false, // 不要小地图
    },
  } as monaco.editor.IEditorConstructionOptions;
  const {value,options,onChange} = config
  const editor_option = Object.assign({},default_editor_option,options)
  /**
   * 注册editor
   */
  const injectMonacoEditorWorker = () => {
    // eslint-disable-next-line
    (window as any).MonacoEnvironment = {
      /**
       * 动态获取worker URL
       *
       * @param _ - 占位符
       * @param label - editor类型
       * @returns
       */
      getWorker(_: string, label: string) {
        if (label === "json") {
          return new JsonWorker();
        }
        if (label === "css" || label === "scss" || label === "less") {
          return new CssWorker();
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return new HtmlWorker();
        }
        if (label === "typescript" || label === "javascript") {
          return new TSWorker();
        }
        return new EditorWorker();
      },
    };
  };

  useEffect(() => {
    if (editor_ref.current) {
      injectMonacoEditorWorker();
      const editor = monaco.editor.create(editor_ref.current, {
        value: value,
        
        ...editor_option,
      });

      editor.onDidChangeModelContent(() => {
        const value = editor.getValue();
        onChange(value)
      });
    }
  }, [editor_ref.current]);

  return (
    <div
    className="h-full"
      ref={editor_ref}
    ></div>
  );
}

export default React.memo(Editor);
