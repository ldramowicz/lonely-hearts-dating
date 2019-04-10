import { Selector } from 'testcafe';

fixture('Data-ID Checklist')
    .page("http://localhost:3000")


test('Data-id attribute is available for the gender filter', async t => {
    await t.expect(Selector("[data-id=genderFemale]")).ok();
    await t.expect(Selector("[data-id=genderMale]")).ok();
    await t.expect(Selector("[data-id=genderAny]")).ok();
});
    
test('Data-id attribute is available for the age filter', async t => {
    await t.expect(Selector("[data-id=ageMax]")).ok();
    await t.expect(Selector("[data-id=ageMin]")).ok();
});

test('Data-id attribute is available for the filter buttons', async t => {
    await t.expect(Selector("[data-id=buttonReset]")).ok();
    await t.expect(Selector("[data-id=buttonFilter]")).ok();
});

test('Data-id attribute is available for the result title', async t => {
    await t.expect(Selector("[data-id=resultTitle]")).ok();
});

test('Data-id attribute is available for the result item structure', async t => {
    await t.expect(Selector("[data-id=resultItem]")).ok();

    await t.expect(Selector("[data-id=userPhoto]")).ok();
    await t.expect(Selector("[data-id=userName]")).ok();
    await t.expect(Selector("[data-id=userAge]")).ok();
    await t.expect(Selector("[data-id=userInfo]")).ok();
});

test('Data-id attribute is available for the info dialog, after clicking on "data-id=userInfo"', async t => {
    await t.click(Selector("[data-id=userInfo]"));

    await t.expect(Selector("[data-id=userDialog]")).ok();
    await t.expect(Selector("[data-id=userPhone]")).ok();
    await t.expect(Selector("[data-id=userCell]")).ok();
    await t.expect(Selector("[data-id=userEmail]")).ok();
});