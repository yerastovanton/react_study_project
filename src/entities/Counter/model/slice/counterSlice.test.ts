import { counterActions, counterReducer } from "./counterSlice";
import { StateSchema } from "app/providers/StoreProvider";
import { CounterSchema } from "../types/counterSchema";

describe('counterSlice', () => {
    test('decrement', ()=> {
        const state: CounterSchema = {value: 10};
        expect(
            counterReducer(state, counterActions.decrement()),
        ).toEqual({value: 9});
    });
});