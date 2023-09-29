import { describe, it, expect } from 'vitest';
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";

it('has no violations', async () => {
	expect(await axe("<main>test</main>")).toHaveNoViolations();
});
