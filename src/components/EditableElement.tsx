import React, { useEffect, useRef } from 'react';

interface EditableElementProps {
  onChange: (value: string) => void;
  children: React.ReactNode;
}

const EditableElement: React.FC<EditableElementProps> = (props) => {
    const { onChange } = props;
    const element = useRef<HTMLDivElement>(null);
    let elements = React.Children.toArray(props.children);
  
    if (elements.length > 1) {
      throw new Error("Can't have more than one child");
    }
  
    const onMouseUp = () => {
      const value = element.current?.textContent || '';
      onChange(value);
    };
  
    useEffect(() => {
      const value = element.current?.textContent || '';
      onChange(value);
    }, []);
  
    elements = [React.cloneElement(elements[0] as React.ReactElement, {
      contentEditable: true,
      suppressContentEditableWarning: true,
      ref: element,
      onKeyUp: onMouseUp,
    })];
  
    return <>{elements}</>;
  };
  

export default EditableElement;
