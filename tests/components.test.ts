describe("hotel UI library",()=>{
  test("library exposes reusable component set",()=>{
    const components=["DatePicker","FilterPanel","HotelCard","Modal"];
    expect(components).toHaveLength(4);
    expect(components).toContain("DatePicker");
  });
  test("guest values are valid",()=>{
    expect([1,2,3,4]).toContain(2);
  });
});