# End of Day Lab: Build a Full CI Pipeline with Events and Triggering

## Goal

Build a complete CI pipeline for this project from scratch. There is no workflow in this repository. You will create the workflow file, define the jobs, and apply controlled event triggering, manual dispatch with inputs, concurrency, and CI skipping.

## What You Have

- A working React app: DevOps Learning Dashboard.
- An existing GitHub repository with this code pushed.
- No `.github` folder. No workflow. No CI.
- `package.json` scripts available: `lint`, `test`, `build`.

You will create the workflow only. Do not change the app code.

## Tasks

Create `.github/workflows/ci.yml`. Complete every task.

1. Create the workflow file with a workflow `name`.

2. Add three jobs:
   - `lint`: checkout, set up Node 20, `npm ci`, `npm run lint`
   - `test`: checkout, set up Node 20, `npm ci`, `npm test`
   - `summary`: runs only after `lint` and `test` succeed

3. Restrict `push` so the workflow runs only on these branches:
   - `main`
   - `develop`

4. Restrict `push` so it runs only when files change in these paths:
   - `src/**`
   - `tests/**`

5. Restrict `pull_request` so it runs only when:
   - the target (base) branch is `main`
   - the activity type is one of:
     - `opened`
     - `synchronize`
     - `reopened`

6. Add a `workflow_dispatch` trigger.

7. Add `workflow_dispatch` inputs:
   - `environment`
     - required
     - default: `staging`
   - `skip_tests`
     - optional
     - default: `false`

8. In the `summary` job, print the selected `environment` input.

9. Add workflow level `concurrency`.

10. Build the concurrency group from the workflow name and the branch ref.

11. In the concurrency block, set:
    - `cancel-in-progress: true`

12. Confirm CI skipping works using `[skip ci]` in a commit message.

## Verification

Run each check and confirm the expected result.

1. Change only `README.md` and push. Workflow does not run.
2. Push to a branch that is not `main` or `develop`. Workflow does not run.
3. Push a change under `src/**` to `main`. Workflow runs and all three jobs pass.
4. Open a pull request targeting `main`. Workflow runs.
5. Push a new commit to that open pull request. Workflow runs (synchronize).
6. Add a label to the pull request. Workflow does not run.
7. Trigger the workflow manually from the Actions tab. Workflow runs and the summary job prints the chosen environment.
8. Start a run, then push again quickly to the same branch. The earlier run is cancelled.
9. Commit with `[skip ci]` in the message and push to a valid branch and path. Workflow does not run.

## Acceptance Criteria

- `.github/workflows/ci.yml` exists with a workflow name and three jobs: `lint`, `test`, `summary`.
- `lint` runs `npm run lint`. `test` runs `npm test`. Both use Node 20 and `npm ci`.
- `summary` runs only after `lint` and `test` succeed.
- `push` runs only on `main` and `develop`.
- `push` runs only for changes in `src/**` or `tests/**`.
- `pull_request` runs only for base branch `main` and types `opened`, `synchronize`, `reopened`.
- `workflow_dispatch` exists with inputs `environment` (required, default `staging`) and `skip_tests` (optional, default `false`).
- The `summary` job prints the selected `environment`.
- Workflow level `concurrency` is set, the group uses workflow name and branch ref, and `cancel-in-progress` is `true`.
- A commit with `[skip ci]` does not trigger the workflow.
- All Verification checks produce the expected result.
