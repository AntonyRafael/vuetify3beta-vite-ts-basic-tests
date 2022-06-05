import { createVuetify } from "vuetify";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import Card from "../../src/components/Card.vue";

describe("Card", () => {
  let wrapper;

  beforeEach(() => {
    const vuetify = createVuetify();

    wrapper = mount(Card, {
      props: {
        id: 1,
        title: "Title Card 1",
        content: "Content Card 1",
        icon: "mdi-account-group",
        stats: 15,
        buttonName: "Button Test 1",
        pathName: "/",
      },
      global: {
        plugins: [vuetify],
      },
    });
  });

  it("Is a Vue instance", () => {
    expect(wrapper).toBeTruthy();
  });
  it("Renders the component", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Renders the template with data", () => {
    console.log(wrapper.vm.id);
    expect(wrapper.vm.id).toBe(1);
    expect(wrapper.vm.title).toBe("Title Card 1");
    expect(wrapper.vm.content).toBe("Content Card 1");
    expect(wrapper.vm.icon).toBe("mdi-account-group");
    expect(wrapper.vm.stats).toBe(15);
    expect(wrapper.vm.buttonName).toBe("Button Test 1");
    expect(wrapper.vm.pathName).toBe("/");
  });

  it("Renders the title with data", () => {
    const title = wrapper.find('[title-test="Title Card 1"]');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe("Title Card 1");
  });

  it("Renders the stats with data", () => {
    const stats = wrapper.find('[stats-test]');
    expect(stats.exists()).toBe(true);
    expect(stats.text()).toBe("15");
  });

  it("Renders the content with data", () => {
    const content = wrapper.find('[content-test]');
    expect(content.exists()).toBe(true);
    expect(content.text()).toBe("Content Card 1");
  });

  it("Renders the icon name with data", () => {
    const icon = wrapper.find('[iconName-test="mdi-account-group"]');
    expect(icon.exists()).toBe(true);
  });

  it("Renders the button name with data", () => {
    const buttonName = wrapper.find("[buttonName-test]");
    expect(buttonName.exists()).toBe(true);
    expect(buttonName.text()).toBe("Button Test 1");
  });
});
