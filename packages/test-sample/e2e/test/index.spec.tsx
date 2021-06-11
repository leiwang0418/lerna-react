describe("Index page", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000");
  });

  it("should be search page", async () => {
    await expect(page).toFill(
      'input[placeholder="请输入GitHub用户名"]',
      "leiwang0418"
    );
    await page.click("button[type=submit]", { text: "查看仓库列表" });
    await expect(page).toMatchElement("h1", { text: "leiwang0418的公共仓库:" });
    await expect(page).toMatchElement("ul");
  });
});
