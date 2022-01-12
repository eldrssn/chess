export { RootState, AppDispatch } from './globalStore';

export { 
  typesOfSchemaPosition, 
  StatePositionProps, 
  ActionSetDefaultPositionProps, 
  ActionPositionProps, 
  ActionHandlerSchemaPositionProps
} from './reducers/schemaPosition';

export { 
  typesOfTurnAndRules, 
  StateTurnsAndRulesProps, 
  PayloadSetChoosenPieceProps, 
  ActionTurnsAndRulesProps, 
  ActionHandlerTurnsAndRulesProps 
} from './reducers/turnsAndRules';