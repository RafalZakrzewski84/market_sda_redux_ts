import axios from 'axios';
import { fetchProducts, fetchCategoryImg } from './productsAction';

//turn off of axios functionality
jest.mock('axios')

describe('productsAction.ts', () => {
    describe('fetchProducts()', () => {
        it('should return an async function', () => {
            const returnFunction = fetchProducts(5)
            //crating instance of async fn to compare fetchProducts()
            const AsyncFunctionConstructor = (async () => { }).constructor
            expect(returnFunction).toBeInstanceOf(AsyncFunctionConstructor);
        })

        it('should call axios.get', () => {
            const returnFunction = fetchProducts(5)

            //mocking of axios.get - spy
            axios.get = jest.fn();
            //mocking of axios response
            Object(axios).get.mockImplementationOnce(() => {
                return Promise.resolve({ data: {} })
            })

            const dispatch = jest.fn()
            const getState = jest.fn()

            returnFunction(dispatch, getState, 1);

            expect(axios.get).toBeCalled()
        })
    })
    describe('fetchCategoryImg()', () => {
        it('should return an async function', () => {
            const returnFunction = fetchCategoryImg(['test', 'test', 'test', 'test'])
            //crating instance of async fn to compare fetchProducts()
            const AsyncFunctionConstructor = (async () => { }).constructor
            expect(returnFunction).toBeInstanceOf(AsyncFunctionConstructor);
        })

        it('should call axios.get', () => {
            const returnFunction = fetchCategoryImg(['', '', '', ''])

            //mocking of axios.get - spy
            axios.get = jest.fn();

            //mocking of axios response
            Object(axios).get.mockImplementation(() => {
                return Promise.resolve({
                    data: [{
                        image: 'img'
                    }]
                })
            })

            const dispatch = jest.fn()
            const getState = jest.fn()

            returnFunction(dispatch, getState, '');

            expect(axios.get).toBeCalled()
        })
    })
})