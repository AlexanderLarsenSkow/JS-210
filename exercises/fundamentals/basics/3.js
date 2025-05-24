if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

// Number of unique execution paths:
// 1: if outer conditions + inner if
// 2: if outer condition + inner else
// 3: outer else outer if
// 4: outer else, outer if, inner if
// 5: outer else, outer if not triggered.
// 6: outer else, outer if, no inner if triggered.