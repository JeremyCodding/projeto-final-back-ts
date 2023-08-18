import { Category } from "./category"

describe("Category Tests", () => {
    test("Construtor da categoria", () => {
        const category = new Category('Movie')

        expect(category.name).toBe('Movie')
    })
})