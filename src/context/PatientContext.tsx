import { createContext, useReducer, useContext } from 'react';
import { stepers } from '../config/constant';
import {
  ChildrenType,
  InitContextState,
  PatientCareAction,
  PatientCareInitalState,
} from '../interface/patientCareDetails.interface';

const trackProgress = (row: number, state: PatientCareInitalState) => {
  for (let progress = 0; progress < row; progress++) {
    state.sideNav[progress].active = true;
  }
  return state.sideNav;
};

const PatientCareReducer = (
  state: PatientCareInitalState,
  action: PatientCareAction,
) => {
  switch (action.type) {
    case 'SET_SELECT_COMPONENT':
      return {
        ...state,
        selectedComponent: action.payload,
        sideNav: trackProgress(action.payload, state),
      };
    default:
      return state;
  }
};

const initalState: PatientCareInitalState = {
  sideNav: stepers,
  selectedComponent: 1,
  
};

const initContextState = {
  state: initalState,
  dispatch: () => null,
};

const PatientCareContext = createContext<InitContextState>(initContextState);

const PatientCareContextProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(PatientCareReducer, initalState);

  return (
    <PatientCareContext.Provider value={{ state, dispatch }}>
      {children}
    </PatientCareContext.Provider>
  );
};

export const usePatientContext = () => useContext(PatientCareContext);

export default PatientCareContextProvider;
