import React from 'react'
import { render, screen } from '@testing-library/react'
import { exhibitions } from './data'
import { TestApp, generateResponse } from '../__config__'
import { toHumanReadable } from '../../_helpers/timestamps'
import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'

jest.mock('axios')

describe('When entering the App', () => {

    beforeEach(() => {
        axios.get.mockClear()
        axios.get.mockImplementation(async () => 
            generateResponse({ success: true, data: exhibitions })
        )
    })

    it('main page is the Billboard', () => {
        // act
        render(<TestApp />)

        // assert
        const title = screen.getByText(/Cartelera/i)
        expect(title).toBeInTheDocument()
    })

    it('shows loading message while fetching Billboard exhibitions', () => {
        // setup
        var keepLoading = true
        
        // arrange
        axios.get.mockClear()
        axios.get.mockImplementationOnce(async () => {

            while (keepLoading) {
                await new Promise(resolve => setTimeout(resolve, 500))
            }

            return generateResponse({ success: true, data: exhibitions })
        })

        // act
        render(<TestApp />)

        // assert
        const message = screen.getByText(/Cargando.../i)
        expect(message).toBeInTheDocument()

        // cleanup
        keepLoading = false
    })

    describe('on error', () => {

        beforeEach(() => {
            axios.get.mockClear()
            axios.get.mockImplementation(async () => (
                generateResponse({ success: false, message: 'An API error message' }, 500)
            ))
        })

        it('shows error message from exhibitions API', async () => {    
            // act
            render(<TestApp />)
    
            // assert
            await waitFor(() => {
                expect( screen.getByText(/An API error message/i) ).toBeInTheDocument()
            })
        })

        it('the retry button works', async () => {    
            // act
            render(<TestApp />)
            
            var button = null
            await waitFor(() => {
                expect( button = screen.getByTestId('reload-button') ).toBeInTheDocument()
            })

            userEvent.click(button)
    
            // assert
            await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2))
        })
    })

    describe('and after fetching the Billboard exhibitions', () => {

        it('displays their names', async () => {

            // act
            render(<TestApp />)

            // assert
            for (const e of exhibitions) {
                await waitFor(() => {
                    expect( screen.getByText(e.nombre) ).toBeInTheDocument()
                })
            }    
        })

        it('displays their descriptions', async () => {

            // act
            render(<TestApp />)

            // assert
            for (const e of exhibitions) {
                await waitFor(() => {
                    expect( screen.getByText(e.descripcion) ).toBeInTheDocument()
                })
            }    
        })

        it('displays their prices', async () => {

            // act
            render(<TestApp />)

            // assert
            for (const e of exhibitions) {
                await waitFor(() => {
                    expect( screen.getByText(RegExp(`\\$.*${e.precio}.*`, 'i')) ).toBeInTheDocument()
                })
            }    
        })

        it('displays their date ranges', async () => {

            // act
            render(<TestApp />)

            // assert
            for (const e of exhibitions) {
                await waitFor(() => {
                    expect( screen.getByText(RegExp(`.*${toHumanReadable(e.desde)}.*`, 'i')) ).toBeInTheDocument()
                    expect( screen.getByText(RegExp(`.*${toHumanReadable(e.hasta)}.*`, 'i')) ).toBeInTheDocument()
                })
            }    
        })

        it('shows add to cart buttons', async () => {

            // act
            render(<TestApp />)

            // assert
            for (const e of exhibitions) {
                await waitFor(() => {
                    expect( screen.getByTestId(`${e.id}-add-to-cart`) ).toBeInTheDocument()
                })
            }
        })
    })

})