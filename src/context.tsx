import { createContext, ReactNode, useEffect, useState } from "react";
import ResponseSchema from "./models/ResponseSchema";

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiContext = createContext<ResponseSchema>({});

export function ApiProvider({ children }: ApiProviderProps) {
  const [apiData, setapiData] = useState<ResponseSchema>({
    user: "",
    type: "",
    navmap: [
      {
        active: false,
        lists: [{}],
        title: "",
      },
    ],
    dashboards: [{id: "", link: ""}],
    navigation: [],
  });

  useEffect(() => {
    fetch("../data/response.json")
      .then((response: Response) => response.json())
      .then((data) => setapiData(data));
  }, []);

  return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
}
