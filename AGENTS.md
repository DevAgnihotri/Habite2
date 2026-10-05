<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep all public copy, product facts, sample data, and business placeholders in `src/config/content.ts` so unverified claims never leak into presentation components.
- Keep the 3D tube label URLs centralized in `src/lib/productTextures.ts` so final flat artwork is replaceable without editing scene code.
