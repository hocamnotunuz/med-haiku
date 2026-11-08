#!/usr/bin/env bash
# Every 5th prompt, reminds the user to move med-haiku into its own GitHub repository.
# The counter lives in .claude/.prompt-count (gitignored), so it starts over
# in each fresh cloud session.

INTERVAL=5
COUNT_FILE="${CLAUDE_PROJECT_DIR:-$(pwd)}/.claude/.prompt-count"

cat > /dev/null # the hook input on stdin is not needed

count=$(cat "$COUNT_FILE" 2>/dev/null)
case "$count" in '' | *[!0-9]*) count=0 ;; esac
count=$((count + 1))
echo "$count" > "$COUNT_FILE"

if [ $((count % INTERVAL)) -eq 0 ]; then
  jq -n --arg n "$count" '{
    systemMessage: ("Reminder (prompt #" + $n + "): move this project into its own GitHub repository."),
    hookSpecificOutput: {
      hookEventName: "UserPromptSubmit",
      additionalContext: "Scheduled reminder from the repo-reminder hook: at the start of your reply, remind the user to move the med-haiku project into its own GitHub repository, and offer to help them do it."
    }
  }'
fi
exit 0
