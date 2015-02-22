Given(/^I am on the homepage$/) do
  visit '/'
end

When(/^I add a product to the basket$/) do
	click_button("+")
end

Then(/^it should be in the basket$/) do
  expect(page).to have_content("1 item in basket")
end
