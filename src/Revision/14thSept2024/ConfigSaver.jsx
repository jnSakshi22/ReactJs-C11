import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const OptionsContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const initialState = {
  theme: "light",
  laguage: "marathi",
  fontSize: 12,
};
const ConfigSaver = () => {
  const [config, setConfig] = useState(initialState);
  const [settings, setSettings] = useState(initialState);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    // const currentCfg = JSON.parse(localStorage.getItem("appConfig"));
    // if (!currentCfg) {
    //   return;
    // } else {
    //   setConfig(currentCfg);
    //   setSettings(currentCfg);
    // }

    // Shorter version using Guard block approach
    const currentCfg = JSON.parse(localStorage.getItem("appConfig"));
    if (!currentCfg) {
      return;
    }
    setConfig(currentCfg);
    setSettings(currentCfg);
  }, []);

  const onSelectionChange = (e) => {
    const { value, name } = e.target;
    console.log({ value, name });

    setSettings((prev) => ({ ...prev, [name]: value }));
    setIsModified(true);
  };

  const onSaveConfig = () => {
    setConfig({ ...settings });
    //setConfig(settings);
    setIsModified(false);
    localStorage.setItem("appConfig", JSON.stringify(settings));
    toast.success("Config saved successful!");
  };

  return (
    <div style={{ padding: 12 }}>
      <p>
        I am using <strong>{config.theme}</strong> theme & my current language
        is <strong>{config.laguage}</strong> & font size is{" "}
        <strong>{config.fontSize}</strong>px
      </p>

      <OptionsContainer>
        <div className="form-element">
          <p>Theme</p>
          <select
            value={settings.theme}
            name="theme"
            onChange={onSelectionChange}
          >
            <option value="">Select theme</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="form-element">
          <p>Language</p>
          <select
            value={settings.laguage}
            name="laguage"
            onChange={onSelectionChange}
          >
            <option value="">Select language</option>
            <option value="hindi">Hindi</option>
            <option value="marathi">Marathi</option>
            <option value="english">English</option>
          </select>
        </div>
        <div className="form-element">
          <p>Font Size</p>
          <select
            value={settings.fontSize}
            name="fontSize"
            onChange={onSelectionChange}
          >
            <option value="">Select font size</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
        </div>
      </OptionsContainer>
      <br />
      <div className="form-element">
        <button onClick={onSaveConfig}>Save Config</button>
        {isModified && <p>You have unsaved changes</p>}
      </div>
    </div>
  );
};
export default ConfigSaver;
