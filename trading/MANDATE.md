# Autonomous Trading Mandate — Account ••••8511

**Status:** NOT LIVE — routine created but disabled, pending connector grant
**Authorized by:** account owner, 2026-10-11
**Scope:** Robinhood individual account ending 8511 ("Agentic"), and no other account.
**Risk budget:** Moderate

> This file is the human-readable record. The binding copy of these limits is
> embedded in the scheduled routine's own prompt, because a routine-spawned
> session clones the repository's default branch and may not see this file.
> If the two ever disagree, the routine prompt governs, and this file is stale
> and must be corrected.

## Hard limits

| Limit | Value |
|---|---|
| Deployable capital | $4,000 |
| SGOV reserve floor | $4,400 (never sell below this) |
| Max single position | $1,200 |
| Max risk per trade | $100 (1.0% of account) |
| Max concurrent positions | 5 |
| Daily realized-loss halt | −$300 (3.0%) |
| Weekly realized-loss halt | −$600 (6.0%) |
| Hard kill | account total value < $9,000 |

## Permitted instruments

- US-listed common stock and plain ETFs only.
- Price between $5 and $500.
- 20-day average volume ≥ 2,000,000 shares.

Prohibited without exception: options (despite level 2 being enabled), crypto,
leveraged or inverse ETFs, OTC and pink-sheet names, anything not on a US
primary listing.

## Execution rules

1. **Every entry gets a protective stop in the same firing.** If the stop order
   fails to place for any reason, close the position immediately at market.
2. **Stops trail up, never down.** Never lower, widen, or cancel a stop that is
   protecting a profit.
3. **Position sizing is derived from risk, not from conviction.**
   `shares = floor(100 / (entry − stop))`, then capped at $1,200 notional.
4. No new entries in the first 10 minutes or last 15 minutes of the session.
5. No entries within 3 trading days of a confirmed earnings date.
6. Never average down into a losing position.
7. One position per symbol. No pyramiding.

## Halt conditions

On any halt, place no new orders, leave existing protective stops in place,
and report. Halts are not self-clearing beyond their stated window.

- Daily loss reached → no new entries for the remainder of that session.
- Weekly loss reached → no new entries for the remainder of that week.
- Hard kill reached → no new orders of any kind; notify and stop. Existing
  stops stay live. Do not liquidate as a reaction to the kill trigger.

## Deployment status

Routine `trig_01WiBcQkG8GXC5KxGdSoWY35` ("Autonomous trading - Robinhood 8511")
was created on 2026-10-11 with schedule `CRON_TZ=America/New_York 41 9-15 * * 1-5`
(hourly, 9:41am–3:41pm ET, weekdays) and then **disabled immediately**.

Reason: the routine stores no MCP connector grant (`mcp_connections: []`). This
organization does not permit attaching connectors to routines created through
the API, so sessions it fires would start with no Robinhood tools and could
neither read the account nor place an order. It was disabled rather than left
firing to no effect.

To make it live, the owner must attach the Robinhood connector from the
claude.ai routines UI and then enable it. Until that is done, nothing trades
automatically and the limits above are not in force because nothing is running.

## Kill switch

The owner stops this permanently by disabling or deleting the scheduled
routine, or by turning trade approvals back on in the Robinhood app
(Account → Investing → agent trading), which forces every order to a manual
approval. Either action takes effect without needing this agent's cooperation.

## Known weaknesses of this arrangement

Recorded deliberately, because they do not go away by being unmentioned.

- **No memory between firings.** Each run reconstructs its view from broker
  state alone. It cannot hold a thesis, wait for a setup it saw earlier, or
  know why a past trade was entered.
- **Hourly cadence.** Stops are trailed at most once an hour. A gap or a fast
  move between firings is unmanaged; the resting stop is the only protection.
- **No review before execution.** Trade approvals are off. A reasoning error
  becomes a fill with nothing in between.
- **The prior agent-placed cohort lost money.** Six of seven closed trades
  between Sept 24–29 were losses, −$142.55 net. That is the track record this
  mandate is extending, not a clean slate.
