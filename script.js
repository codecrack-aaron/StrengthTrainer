// ========================================
// FRANKOMAN 6-DAY PPL TRACKER
// ========================================

const ROUTINE = {
  PushA: {
    name: "Push A (Chest & Shoulders)",
    exercises: [
      { name: "Incline Dumbbell Bench Press", sets: 2, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/incline-dumbbell-bench-press.html" },
      { name: "Dumbbell Bench Press", sets: 2, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/dumbbell-bench-press.html" },
      { name: "Dumbbell Flys", sets: 1, reps: "12", rest: "60s", link: "https://www.muscleandstrength.com/exercises/dumbbell-flys.html" },
      { name: "Standing Dumbbell Press", sets: 2, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/standing-dumbbell-press.html" },
      { name: "Dumbbell Lateral Raise", sets: 2, reps: "10-12", rest: "60s", link: "https://www.muscleandstrength.com/exercises/dumbbell-lateral-raise.html" }
    ]
  },
  PullA: {
    name: "Pull A (Back Thickness)",
    exercises: [
      { name: "One Arm Dumbbell Row", sets: 3, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/one-arm-dumbbell-row.html" },
      { name: "Bent Over Dumbbell Row", sets: 2, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/bent-over-dumbbell-row.html" },
      { name: "Dumbbell Pullover", sets: 1, reps: "10-12", rest: "60s", link: "https://www.muscleandstrength.com/exercises/dumbbell-pullover.html" },
      { name: "Incline Dumbbell Curl", sets: 2, reps: "10", rest: "60s", link: "https://www.muscleandstrength.com/exercises/incline-dumbbell-curl.html" },
      { name: "Standing Dumbbell Curl", sets: 1, reps: "10", rest: "60s", link: "https://www.muscleandstrength.com/exercises/standing-dumbbell-curl.html" }
    ]
  },
  LegsA: {
    name: "Legs A (Quad Focus)",
    exercises: [
      { name: "Dumbbell Lunge", sets: 2, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/dumbbell-lunge.html" },
      { name: "Dumbbell Squat", sets: 2, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/dumbbell-squat.html" },
      { name: "Dumbbell Stiff Leg Deadlift", sets: 2, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/dumbbell-stiff-leg-deadlift.html" },
      { name: "Seated Dumbbell Calf Raise", sets: 1, reps: "12-15", rest: "60s", link: "https://www.muscleandstrength.com/exercises/seated-dumbbell-calf-raise.html" },
      { name: "Dumbbell Standing Calf Raise", sets: 2, reps: "10-12", rest: "60s", link: "https://www.muscleandstrength.com/exercises/standing-one-leg-calf-raise-with-dumbbell.html" }
    ]
  },
  PushB: {
    name: "Push B (Triceps & Chest)",
    exercises: [
      { name: "Dumbbell Bench Press", sets: 2, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/dumbbell-bench-press.html" },
      { name: "Incline Dumbbell Bench Press", sets: 2, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/incline-dumbbell-bench-press.html" },
      { name: "Dumbbell Skullcrusher", sets: 2, reps: "12", rest: "60s", link: "https://www.muscleandstrength.com/exercises/ez-bar-skullcrusher.html" },
      { name: "Dumbbell Tricep Kickback", sets: 1, reps: "12", rest: "60s", link: "https://www.muscleandstrength.com/exercises/tricep-kickback.html" },
      { name: "Bent Over Dumbbell Reverse Fly", sets: 2, reps: "10-12", rest: "60s", link: "https://www.muscleandstrength.com/exercises/bent-over-dumbbell-reverse-fly.html" }
    ]
  },
  PullB: {
    name: "Pull B (Back Width & Biceps)",
    exercises: [
      { name: "Bent Over Dumbbell Row", sets: 3, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/bent-over-dumbbell-row.html" },
      { name: "One Arm Dumbbell Row", sets: 2, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/one-arm-dumbbell-row.html" },
      { name: "Dumbbell Pullover", sets: 1, reps: "10-12", rest: "60s", link: "https://www.muscleandstrength.com/exercises/dumbbell-pullover.html" },
      { name: "Standing Dumbbell Curl", sets: 2, reps: "10", rest: "60s", link: "https://www.muscleandstrength.com/exercises/standing-dumbbell-curl.html" },
      { name: "Cross Body Hammer Curl", sets: 1, reps: "10", rest: "60s", link: "https://www.muscleandstrength.com/exercises/hammer-curl-across-the-body.html" }
    ]
  },
  LegsB: {
    name: "Legs B (Posterior Chain)",
    exercises: [
      { name: "Dumbbell Stiff Leg Deadlift", sets: 2, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/dumbbell-stiff-leg-deadlift.html" },
      { name: "Dumbbell Step Up", sets: 2, reps: "12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/dumbbell-step-up.html" },
      { name: "Dumbbell Squat", sets: 2, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/dumbbell-squat.html" },
      { name: "Dumbbell Lunge", sets: 1, reps: "10-12", rest: "90s", link: "https://www.muscleandstrength.com/exercises/dumbbell-lunge.html" },
      { name: "Dumbbell Shrug", sets: 2, reps: "10-12", rest: "60s", link: "https://www.muscleandstrength.com/exercises/dumbbell-shrugs.html" }
    ]
  }
};

const CYCLE_ORDER = ["PushA", "PullA", "LegsA", "PushB", "PullB", "LegsB"];

// ========================================
// STATE MANAGEMENT
// ========================================

let state = {
  currentDay: null,
  currentExerciseIndex: 0,
  currentWorkout: null,
  settings: {
    unit: 'kg',
    autoTimer: true
  }
};

let timerInterval = null;
let timerSeconds = 0;

// ========================================
// LOCAL STORAGE
// ========================================

function loadData() {
  const stored = localStorage.getItem('frankomanData');
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    lastCompletedDay: null,
    history: []
  };
}

function saveData(data) {
  localStorage.setItem('frankomanData', JSON.stringify(data));
}

function loadSettings() {
  const stored = localStorage.getItem('frankomanSettings');
  if (stored) {
    state.settings = JSON.parse(stored);
  }
}

function saveSettings() {
  localStorage.setItem('frankomanSettings', JSON.stringify(state.settings));
}

// ========================================
// PROGRESSION LOGIC
// ========================================

function getSuggestedWeight(dayKey, exerciseName, setIndex) {
  const data = loadData();
  const lastWorkout = findLastWorkout(data.history, dayKey, exerciseName);

  if (!lastWorkout) {
    return state.settings.unit === 'kg' ? 2.5 : 5; // Default starting weight
  }

  const sets = lastWorkout.sets;
  const lastSet = sets[setIndex];

  if (!lastSet) {
    return sets[0]?.weight || (state.settings.unit === 'kg' ? 2.5 : 5);
  }

  // Parse target reps
  const target = ROUTINE[dayKey].exercises.find(e => e.name === exerciseName).reps;
  const [minReps, maxReps] = target.includes('-')
    ? target.split('-').map(Number)
    : [Number(target), Number(target)];

  // Check if all sets hit top of rep range
  const allSetsMaxed = sets.every(s => s.reps >= maxReps);
  const anySetBelowMin = sets.some(s => s.reps < minReps);

  const increment = state.settings.unit === 'kg' ? 1.25 : 2.5;

  if (allSetsMaxed) {
    return lastSet.weight + increment;
  } else if (anySetBelowMin) {
    return Math.max(lastSet.weight - increment, increment);
  }

  return lastSet.weight;
}

function findLastWorkout(history, dayKey, exerciseName) {
  for (let i = history.length - 1; i >= 0; i--) {
    const workout = history[i];
    if (workout.dayKey === dayKey) {
      const exercise = workout.exercises.find(e => e.name === exerciseName);
      if (exercise) {
        return exercise;
      }
    }
  }
  return null;
}

function getLastPerformance(dayKey, exerciseName, setIndex) {
  const data = loadData();
  const lastWorkout = findLastWorkout(data.history, dayKey, exerciseName);

  if (!lastWorkout || !lastWorkout.sets[setIndex]) {
    return null;
  }

  const set = lastWorkout.sets[setIndex];
  return `Last: ${set.weight}${state.settings.unit} × ${set.reps}`;
}

// ========================================
// HOME SCREEN
// ========================================

function initHomeScreen() {
  const data = loadData();

  // Update last done info for each day
  CYCLE_ORDER.forEach(dayKey => {
    const lastDoneEl = document.getElementById(`lastDone-${dayKey}`);
    const lastWorkout = findLastCompletedDay(data.history, dayKey);

    if (lastWorkout) {
      const date = new Date(lastWorkout.date).toLocaleDateString();
      const firstEx = lastWorkout.exercises[0];
      const preview = firstEx.sets.slice(0, 2)
        .map(s => `${s.weight}${state.settings.unit} × ${s.reps}`)
        .join(', ');
      lastDoneEl.textContent = `Last: ${date} (${preview})`;
    } else {
      lastDoneEl.textContent = 'Never completed';
    }
  });

  // Attach day button listeners
  document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dayKey = btn.dataset.day;
      startWorkout(dayKey);
    });
  });
}

function findLastCompletedDay(history, dayKey) {
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].dayKey === dayKey) {
      return history[i];
    }
  }
  return null;
}

// ========================================
// WORKOUT SCREEN
// ========================================

function startWorkout(dayKey) {
  state.currentDay = dayKey;
  state.currentExerciseIndex = 0;

  // Initialize workout structure
  const exercises = ROUTINE[dayKey].exercises;
  state.currentWorkout = {
    dayKey: dayKey,
    date: new Date().toISOString().split('T')[0],
    completedAt: null,
    exercises: exercises.map(ex => ({
      name: ex.name,
      link: ex.link,
      sets: Array.from({ length: ex.sets }, (_, i) => ({
        set: i + 1,
        targetReps: ex.reps,
        weight: getSuggestedWeight(dayKey, ex.name, i),
        reps: null,
        completed: false
      }))
    }))
  };

  showScreen('workoutScreen');
  renderExercise();
}

function renderExercise() {
  const exerciseData = ROUTINE[state.currentDay].exercises[state.currentExerciseIndex];
  const workoutExercise = state.currentWorkout.exercises[state.currentExerciseIndex];

  // Update header
  document.getElementById('workoutTitle').textContent = ROUTINE[state.currentDay].name;
  document.getElementById('exerciseCounter').textContent =
    `Exercise ${state.currentExerciseIndex + 1} of ${ROUTINE[state.currentDay].exercises.length}`;

  // Update exercise info
  document.getElementById('exerciseName').textContent = exerciseData.name;
  document.getElementById('demoLink').href = exerciseData.link;

  // Render sets
  const setsContainer = document.getElementById('setsContainer');
  setsContainer.innerHTML = '';

  workoutExercise.sets.forEach((setData, index) => {
    const setRow = document.createElement('div');
    setRow.className = `set-row ${setData.completed ? 'completed' : ''}`;

    const lastPerf = getLastPerformance(state.currentDay, exerciseData.name, index);

    setRow.innerHTML = `
      <div class="set-header">
        <span class="set-number">Set ${setData.set}</span>
        <span class="target-reps">Target: ${setData.targetReps} reps</span>
      </div>
      <div class="set-inputs">
        <div class="input-group weight-group">
          <label>Weight (${state.settings.unit})</label>
          <input type="number"
                 class="weight-input"
                 data-set="${index}"
                 value="${setData.weight}"
                 step="${state.settings.unit === 'kg' ? '1.25' : '2.5'}"
                 ${setData.completed ? 'disabled' : ''}>
        </div>
        <div class="input-group reps-group">
          <label>Reps</label>
          <input type="number"
                 class="reps-input"
                 data-set="${index}"
                 value="${setData.reps || ''}"
                 ${setData.completed ? 'disabled' : ''}>
        </div>
        <button class="check-btn ${setData.completed ? 'completed' : ''}"
                data-set="${index}"
                ${setData.completed ? 'disabled' : ''}>
          ${setData.completed ? '✓' : '○'}
        </button>
      </div>
      ${lastPerf ? `<div class="previous-performance">${lastPerf}</div>` : ''}
    `;

    setsContainer.appendChild(setRow);
  });

  // Attach listeners to inputs and check buttons
  document.querySelectorAll('.weight-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const setIndex = parseInt(e.target.dataset.set);
      workoutExercise.sets[setIndex].weight = parseFloat(e.target.value) || 0;
    });
  });

  document.querySelectorAll('.reps-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const setIndex = parseInt(e.target.dataset.set);
      workoutExercise.sets[setIndex].reps = parseInt(e.target.value) || null;
    });
  });

  document.querySelectorAll('.check-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const setIndex = parseInt(e.target.dataset.set);
      completeSet(setIndex);
    });
  });

  // Update navigation buttons
  updateWorkoutNavigation();
}

function completeSet(setIndex) {
  const workoutExercise = state.currentWorkout.exercises[state.currentExerciseIndex];
  const setData = workoutExercise.sets[setIndex];

  if (!setData.reps || setData.reps <= 0) {
    alert('Please enter reps completed');
    return;
  }

  setData.completed = true;
  renderExercise();

  // Start rest timer if enabled
  if (state.settings.autoTimer) {
    const exerciseData = ROUTINE[state.currentDay].exercises[state.currentExerciseIndex];
    const restTime = parseInt(exerciseData.rest);
    startRestTimer(restTime);
  }
}

function startRestTimer(seconds) {
  stopRestTimer();

  timerSeconds = seconds;
  document.getElementById('timerDisplay').textContent = timerSeconds;
  document.getElementById('restTimer').style.display = 'block';

  timerInterval = setInterval(() => {
    timerSeconds--;
    document.getElementById('timerDisplay').textContent = timerSeconds;

    if (timerSeconds <= 0) {
      stopRestTimer();
    }
  }, 1000);
}

function stopRestTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  document.getElementById('restTimer').style.display = 'none';
}

function updateWorkoutNavigation() {
  const prevBtn = document.getElementById('prevExercise');
  const nextBtn = document.getElementById('nextExercise');
  const finishBtn = document.getElementById('finishWorkout');

  prevBtn.disabled = state.currentExerciseIndex === 0;

  const isLastExercise = state.currentExerciseIndex === ROUTINE[state.currentDay].exercises.length - 1;

  if (isLastExercise) {
    nextBtn.style.display = 'none';
    finishBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'block';
    finishBtn.style.display = 'none';
  }
}

function goToPreviousExercise() {
  if (state.currentExerciseIndex > 0) {
    state.currentExerciseIndex--;
    renderExercise();
    stopRestTimer();
  }
}

function goToNextExercise() {
  if (state.currentExerciseIndex < ROUTINE[state.currentDay].exercises.length - 1) {
    state.currentExerciseIndex++;
    renderExercise();
    stopRestTimer();
  }
}

function finishWorkout() {
  stopRestTimer();

  // Verify all sets are completed
  const allCompleted = state.currentWorkout.exercises.every(ex =>
    ex.sets.every(set => set.completed)
  );

  if (!allCompleted) {
    const confirm = window.confirm('Not all sets are marked complete. Finish anyway?');
    if (!confirm) return;
  }

  // Save workout
  state.currentWorkout.completedAt = new Date().toISOString();

  const data = loadData();
  data.history.push(state.currentWorkout);
  data.lastCompletedDay = `${state.currentWorkout.date}-${state.currentWorkout.dayKey}`;
  saveData(data);

  // Show summary
  showWorkoutSummary();
}

function showWorkoutSummary() {
  const summaryContent = document.getElementById('summaryContent');
  const workout = state.currentWorkout;

  let html = `<p><strong>${ROUTINE[workout.dayKey].name}</strong></p>`;
  html += `<p>Date: ${new Date(workout.date).toLocaleDateString()}</p><br>`;

  workout.exercises.forEach(ex => {
    const completedSets = ex.sets.filter(s => s.completed).length;
    const totalSets = ex.sets.length;
    const setsSummary = ex.sets
      .map(s => `${s.weight}${state.settings.unit} × ${s.reps}`)
      .join(', ');

    html += `<p><strong>${ex.name}</strong><br>${completedSets}/${totalSets} sets: ${setsSummary}</p>`;
  });

  summaryContent.innerHTML = html;
  document.getElementById('summaryModal').classList.add('active');
}

function closeSummary() {
  document.getElementById('summaryModal').classList.remove('active');
  state.currentWorkout = null;
  state.currentDay = null;
  state.currentExerciseIndex = 0;
  showScreen('homeScreen');
  initHomeScreen();
}

// ========================================
// HISTORY SCREEN
// ========================================

function showHistory() {
  const data = loadData();
  const historyList = document.getElementById('historyList');

  if (data.history.length === 0) {
    historyList.innerHTML = '<p class="empty-message">No workouts completed yet. Start training!</p>';
  } else {
    historyList.innerHTML = '';

    // Show most recent first
    const sortedHistory = [...data.history].reverse();

    sortedHistory.forEach(workout => {
      const item = document.createElement('div');
      item.className = 'history-item';

      const totalSets = workout.exercises.reduce((sum, ex) => sum + ex.sets.length, 0);
      const completedSets = workout.exercises.reduce((sum, ex) =>
        sum + ex.sets.filter(s => s.completed).length, 0
      );

      const exerciseSummary = workout.exercises
        .map(ex => `${ex.name}: ${ex.sets.map(s => `${s.weight}${state.settings.unit}×${s.reps}`).join(', ')}`)
        .join('<br>');

      item.innerHTML = `
        <div class="history-header">
          <div>
            <div class="history-day">${ROUTINE[workout.dayKey].name}</div>
            <div class="history-date">${new Date(workout.date).toLocaleDateString()}</div>
          </div>
          <div class="history-date">${completedSets}/${totalSets} sets</div>
        </div>
        <div class="history-summary">${exerciseSummary}</div>
      `;

      historyList.appendChild(item);
    });
  }

  showScreen('historyScreen');
}

function exportData() {
  const data = loadData();
  const dataStr = JSON.stringify(data, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `frankoman-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();

  URL.revokeObjectURL(url);
}

function importData() {
  document.getElementById('importFile').click();
}

function handleImportFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);

      // Merge with existing data
      const existing = loadData();

      // Combine histories and remove duplicates
      const combined = [...existing.history, ...imported.history];
      const unique = combined.filter((workout, index, self) =>
        index === self.findIndex(w =>
          w.date === workout.date &&
          w.dayKey === workout.dayKey &&
          w.completedAt === workout.completedAt
        )
      );

      const merged = {
        lastCompletedDay: imported.lastCompletedDay || existing.lastCompletedDay,
        history: unique.sort((a, b) => new Date(a.completedAt) - new Date(b.completedAt))
      };

      saveData(merged);
      alert('Data imported successfully!');
      showHistory();
    } catch (error) {
      alert('Error importing data: Invalid file format');
    }
  };
  reader.readAsText(file);
}

// ========================================
// SETTINGS SCREEN
// ========================================

function showSettings() {
  document.getElementById('unitToggle').value = state.settings.unit;
  document.getElementById('autoTimer').value = state.settings.autoTimer.toString();
  showScreen('settingsScreen');
}

function clearAllData() {
  const confirm = window.confirm('Are you sure you want to delete ALL workout data? This cannot be undone!');
  if (!confirm) return;

  const doubleConfirm = window.confirm('This will permanently delete your entire workout history. Continue?');
  if (!doubleConfirm) return;

  localStorage.removeItem('frankomanData');
  alert('All data cleared');
  showScreen('homeScreen');
  initHomeScreen();
}

// ========================================
// SCREEN MANAGEMENT
// ========================================

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  initHomeScreen();

  // Navigation listeners
  document.getElementById('historyBtn').addEventListener('click', showHistory);
  document.getElementById('settingsBtn').addEventListener('click', showSettings);
  document.getElementById('backBtn').addEventListener('click', () => {
    stopRestTimer();
    const confirm = window.confirm('Exit workout? Progress will be lost.');
    if (confirm) {
      state.currentWorkout = null;
      showScreen('homeScreen');
    }
  });
  document.getElementById('historyBackBtn').addEventListener('click', () => showScreen('homeScreen'));
  document.getElementById('settingsBackBtn').addEventListener('click', () => showScreen('homeScreen'));

  // Workout navigation
  document.getElementById('prevExercise').addEventListener('click', goToPreviousExercise);
  document.getElementById('nextExercise').addEventListener('click', goToNextExercise);
  document.getElementById('finishWorkout').addEventListener('click', finishWorkout);

  // Rest timer
  document.getElementById('skipTimer').addEventListener('click', stopRestTimer);

  // History actions
  document.getElementById('exportBtn').addEventListener('click', exportData);
  document.getElementById('importBtn').addEventListener('click', importData);
  document.getElementById('importFile').addEventListener('change', handleImportFile);

  // Settings
  document.getElementById('unitToggle').addEventListener('change', (e) => {
    state.settings.unit = e.target.value;
    saveSettings();
    initHomeScreen();
  });

  document.getElementById('autoTimer').addEventListener('change', (e) => {
    state.settings.autoTimer = e.target.value === 'true';
    saveSettings();
  });

  document.getElementById('clearDataBtn').addEventListener('click', clearAllData);

  // Summary modal
  document.getElementById('closeSummary').addEventListener('click', closeSummary);
});
