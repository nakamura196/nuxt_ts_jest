import { mount } from "@vue/test-utils";
import App from "@/components/TargetEvent.vue";

describe("App", () => {
  it("click button count up", async () => {
    const wrapper = mount(App);

    // DOM更新系は即座にDOMに反映されないのでasync awaitを使う
    await wrapper.get("button").trigger("click");

    // findからのtextでタグの中身をとってくる
    const contain = wrapper.find('[data-cy="countCheck"]').text();
    console.log("contain内容チェック", contain);

    //タグの中身確認
    expect(contain).toContain("Count is: 1");
  });
});