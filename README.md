`npm run check` fails:

```
Error: Property 'toHaveNoViolations' does not exist on type 'Assertion<AxeResults>'. 
it('has no violations', async () => {
        expect(await axe("<main>test</main>")).toHaveNoViolations();
});
```

If you revert the latest commit, setting `module` and `moduleResolution` to `nodenext`, `npm run check` succeeds.

Reported issue: https://github.com/chaance/vitest-axe/issues/11
