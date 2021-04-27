import { createContext, ReactNode, useEffect, useState } from "react";
import ResponseSchema from "./models/ResponseSchema";
import ModelResponseData from "./data/response.json";

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiContext = createContext<ResponseSchema>({});

export function ApiProvider({ children }: ApiProviderProps) {
  const response = ModelResponseData;
  const [apiData, setapiData] = useState<ResponseSchema>({
    user: "",
    type: "",
    navmap: [
      {
        active: false,
        lists: [
          {
            active: false,
            link: "",
            listname: "",
          },
        ],
        title: "",
      },
    ],
    dashboards: [{ id: "", link: "" }],
    navigation: [""],
  });

  useEffect(() => setapiData(response), []);

  return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
}
