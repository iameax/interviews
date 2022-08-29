import * as React from 'react';
import { Input } from '../components/Input/Input';

import s from './workspace.scss';


export const Workspace = ({ }) => {
  const [textValue, setTextValue] = React.useState<string>();
  // const [numberValue, setNumberValue] = React.useState<string>(null);

  return (
    <div className={s.container}>
      <pre style={{ padding: '20px 0' }}>
        {`textValue: ${JSON.stringify(textValue)}`}
      </pre>

      <div style={{ margin: '15px 0' }}>
        <div style={{ marginBottom: 10 }}>TextInput: </div>
        <Input
          placeholder="Input your text"
          value={textValue}
          onChange={(value) => setTextValue(value)}
        />
      </div>
    </div>
  );
}
